import {defineConfig} from 'vitepress'

const rawContentUrl = 'https://raw.githubusercontent.com/young-kii/young-kii.github.io'
// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Noddle docs",
    description: "逸轩的前端文档",
    outDir: '../front-end-docs',
    base: '/front-end-docs/',
    head: [['link', { rel: 'icon', href: rawContentUrl + '/master/assets/images/book_mark.svg' }]],
    themeConfig: {
        logo: rawContentUrl + '/master/assets/images/book_mark.svg',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'}
        ],
        aside: undefined, // 页面导航链接位置,默认在右边
        sidebar: [
            {
                text: 'Examples',
                // collapsed: true, // 是否显示折叠,默认不折叠
                items: [
                    {
                        text: 'Markdown Examples',
                        link: '/markdown-examples',
                    },
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],
        sidebarMenuLabel: 'as',
        search: {
            provider: 'local',
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
