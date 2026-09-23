import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "钱瑞Qr1mln💕",
  description: "My Blog.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Base', items:[
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
      { text: 'High', items: [
          { text: 'SpringBoot', link: '/markdown-examples' },
          { text: 'MybatisPlus', link: '/markdown-examples' },
          { text: 'Quartz', link: '/markdown-examples' },
          { text: 'Redis', link: '/markdown-examples' },
        ] },
      { text: 'Ultra', items:[
          {text: "experience",link: "/"}
        ] },
      { text: 'Tools', link: '/markdown-examples' }
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
