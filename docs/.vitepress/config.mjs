import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  // GitHub Pages 项目站点地址为 https://qr1mln.github.io/Qr1mln-notes/
  // 若改用自定义域名，需删除此项
  base: '/Qr1mln-notes/',
  title: "钱瑞Qr1mln💕",
  markdown: {
    config: (md) => {
      md.use(mathjax3)
      // markdown-it-mathjax3 默认通过 tex2svgHtml 在每个公式内注入 <style> 标签，
      // 而 Vue 编译 markdown 生成的 SFC 模板禁止模板内的副作用标签（dev 下直接报错）。
      // 这里改用 tex2svg 只输出 SVG 容器本身，全局样式已统一放到 theme/style.css。
      const renderMath = (content, display) => {
        const MathJax = globalThis.MathJax
        const node = MathJax.tex2svg(content, { display })
        return MathJax.startup.adaptor.outerHTML(node)
      }
      md.renderer.rules.math_inline = (tokens, idx) =>
        renderMath(tokens[idx].content, false)
      md.renderer.rules.math_block = (tokens, idx) =>
        renderMath(tokens[idx].content, true)
    }
  },
  // 让 Vue 把 MathJax 输出的 mjx-* 标签当作原生自定义元素渲染，
  // 否则会被当成组件、仅在客户端渲染（SSG HTML 中缺失公式）。
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('mjx-')
      }
    }
  },
  description: "My Blog.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '软考', items:[
          { text: '笔记记录', link: '/examination/index' },
          { text: '模拟考试', link: '/star/index' }
        ] },
      { text: '算法', link: '/algorithm/index' },
      { text: 'STAR', link: '/star/index' }
    ],

    sidebar: [

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Qr1mln' }
    ]
  }
})
