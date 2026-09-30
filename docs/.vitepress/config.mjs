import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // GitHub Pages 项目站点地址为 https://qr1mln.github.io/Qr1mln-notes/
  // 若改用自定义域名，需删除此项
  base: '/Qr1mln-notes/',
  title: "钱瑞Qr1mln💕",
  description: "My Blog.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '软考', link: '/examination/index' },
      { text: 'STAR', link: '/star/index' }
    ],

    sidebar: [
     
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Qr1mln' }
    ]
  }
})
