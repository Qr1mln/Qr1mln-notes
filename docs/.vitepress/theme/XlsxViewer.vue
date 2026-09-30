<script setup>
import { ref, onMounted } from 'vue'
import * as XLSX from 'xlsx'

const props = defineProps({
  // 相对站点根的路径（base 已自动注入），如 /Qr1mln-notes/exam/2016-shang.xlsx
  src: { type: String, required: true },
  sheet: { type: [String, Number], default: 0 }, // 表名或序号
})

const headers = ref([])
const rows = ref([])
const sheetNames = ref([])
const active = ref(0)
const loading = ref(true)
const error = ref('')

async function load(nameOrIndex) {
  loading.value = true
  error.value = ''
  try {
    const buf = await fetch(props.src).then((r) => {
      if (!r.ok) throw new Error('HTTP ' + r.status)
      return r.arrayBuffer()
    })
    const wb = XLSX.read(new Uint8Array(buf), { type: 'array' })
    sheetNames.value = wb.SheetNames
    const idx = typeof nameOrIndex === 'number'
      ? nameOrIndex
      : Math.max(0, wb.SheetNames.indexOf(nameOrIndex))
    active.value = idx
    const ws = wb.Sheets[wb.SheetNames[idx]]
    const data = XLSX.utils.sheet_to_json(ws, {
      header: 1, defval: '', raw: false,
    })
    if (data.length) {
      headers.value = data[0].map((h, i) => h || `列${i + 1}`)
      rows.value = data.slice(1)
    } else {
      headers.value = []
      rows.value = []
    }
  } catch (e) {
    error.value = String(e)
  } finally {
    loading.value = false
  }
}

function selectSheet(i) {
  load(i)
}

onMounted(() => load(props.sheet))
</script>

<template>
  <ClientOnly>
    <div class="xlsx-viewer">
      <div v-if="sheetNames.length > 1" class="sheet-tabs">
        <button
          v-for="(n, i) in sheetNames"
          :key="n"
          :class="{ active: i === active }"
          @click="selectSheet(i)"
        >{{ n }}</button>
      </div>

      <p v-if="loading">加载中…</p>
      <p v-else-if="error" class="err">解析失败：{{ error }}</p>
      <p v-else-if="!rows.length">空表</p>
      <div v-else class="table-wrap">
        <table>
          <thead>
            <tr><th v-for="(h, i) in headers" :key="i">{{ h }}</th></tr>
          </thead>
          <tbody>
            <tr v-for="(r, i) in rows" :key="i">
              <td v-for="(c, j) in r" :key="j">{{ c }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
.xlsx-viewer { margin: 1rem 0; }
.xlsx-viewer .sheet-tabs { margin-bottom: 0.5rem; }
.xlsx-viewer .sheet-tabs button {
  margin-right: 6px; padding: 4px 10px; cursor: pointer;
  border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg);
  border-radius: 4px; color: var(--vp-c-text-1);
}
.xlsx-viewer .sheet-tabs button.active {
  font-weight: 600; color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}
.xlsx-viewer .table-wrap { overflow-x: auto; }
.xlsx-viewer table { border-collapse: collapse; width: 100%; font-size: 14px; }
.xlsx-viewer th, .xlsx-viewer td {
  border: 1px solid var(--vp-c-divider); padding: 6px 10px; min-width: 60px;
}
.xlsx-viewer th { background: var(--vp-c-bg-soft); text-align: left; }
.xlsx-viewer .err { color: var(--vp-c-danger-1); }
</style>
