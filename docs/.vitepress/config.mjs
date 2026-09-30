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
      { text: '基础', items:[
          {text:"Java", link:"/"},
          {text:"modes", items:[
              {text:"c", link:"/"},
            ]},
          {text:"Maven", items:[
              {text:"c", link:"/"},
            ]},
          {text:"Git", items:[
              {text:"c", link:"/"},
            ]},
          {text:"Debug", items:[
              {text:"c", link:"/"},
            ]},
        ]},
      { text: '高级', items: [
          { text: 'SpringBoot', link: '/markdown-examples' },
          { text: 'MybatisPlus', link: '/markdown-examples' },
          { text: 'Quartz', link: '/markdown-examples' },
          { text: 'Redis', link: '/markdown-examples' },
        ] },
      { text: '超越', items:[
          {text: "experience",link: "/"},
          {text: "软考", items:[
              {text: "上午内容", link: "/"},
              {text: "下午内容", link: "/"},
              ]}
        ] },
      { text: 'Tools', link: '/markdown-examples' },
      { text: 'STAR法则', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Catalog',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Qr1mln' }
    ]
  }
})
