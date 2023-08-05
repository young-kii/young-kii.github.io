import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Noddle docs",
    description: "逸轩的前端文档",
    themeConfig: {
        logo: '😄',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'}
        ], aside: false,

        sidebar: [
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        search: {
            provider: 'local',
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
