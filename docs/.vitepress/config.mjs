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
      { text: '基础', link: '/' },
      { text: '高级', link: '/' },
      { text: '超越', link: '/' },
      { text: '软考', link: '/ISD/index' },
      { text: 'Tools', link: '/markdown-examples' },
      { text: 'STAR', link: '/star/index' }
    ],

    sidebar: [
      {
        text: '基础',
        children: [
          { text: 'Java', link: '/' },
          { text: 'modes', link: '/' },
          { text: 'Maven', link: '/' },
          { text: 'Git', link: '/' },
          { text: 'Debug', link: '/' },
        ]
      },
      {
        text: '高级',
        children: [
          { text: 'SpringBoot', link: '/markdown-examples' },
          { text: 'MybatisPlus', link: '/markdown-examples' },
          { text: 'Quartz', link: '/markdown-examples' },
          { text: 'Redis', link: '/markdown-examples' },
        ]
      },
      {
        text: '超越',
        children: [
          { text: 'experience', link: '/' },
          { text: '软考', link: '/' },
        ]
      },
      {
        text: 'Tools',
        link: '/markdown-examples'
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Qr1mln' }
    ]
  }
})
