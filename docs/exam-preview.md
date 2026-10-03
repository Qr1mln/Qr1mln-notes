---
title: 真题预览
---

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const file = ref('')

function sync() {
  // 优先取 VitePress 路由参数；客户端退化时直接用地址栏
  const q = route.query?.file
  if (q) {
    file.value = Array.isArray(q) ? q[0] : String(q)
  } else if (typeof window !== 'undefined') {
    file.value = new URLSearchParams(window.location.search).get('file') || ''
  }
}

watch(() => route.query, sync, { immediate: true, deep: true })
onMounted(sync)
</script>

# 真题预览

<p v-if="!file">
  请在地址后追加 <code>?file=</code> 参数指定 xlsx 路径，例如：
  <code>/exam-preview?file=/Qr1mln-notes/exam/2016-shang-1.xlsx</code>
</p>

<XlsxViewer v-else :src="file" />
