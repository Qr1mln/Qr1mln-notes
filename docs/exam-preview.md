---
title: 真题预览
---

<script setup>
import { useRoute } from 'vitepress'

const route = useRoute()
</script>

# 真题预览

<p v-if="!route.query.file">
  请在地址后追加 <code>?file=</code> 参数指定 xlsx 路径，例如：
  <code>/exam-preview?file=/Qr1mln-notes/exam/2016-shang-1.xlsx</code>
</p>

<XlsxViewer v-else :src="String(route.query.file)" />
