import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    outline: 'deep',  // 文章右侧目录层级
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present ssegsa'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    }
  },
  // 国际化
  locales: {
    root: {
      title: "软件研会",
      description: "A simple skeuomorphic style lightweight middle and backend template.",
      label: '简体中文',
      lang: 'zh-CN', // optional, will be added  as `lang` attribute on `html` tag
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        langMenuLabel: '切换语言',
        darkModeSwitchLabel: '外观',
        sidebarMenuLabel: '目录',
        returnToTopLabel: '返回顶部',
        lastUpdatedText: '上次更新',
        outlineTitle: '本章目录',
        docFooter: {
          prev: '上一篇',
          next: '下一篇',
        },
        nav: [
          { text: '学术科研', link: '/academic/' },
          { text: '专业实践', link: '/practice/' },
          { text: '资源仓库', link: '/resource/' }
        ],
    
        sidebar: {
          '/academic/': [
            { text: '学术研究', link: '/academic/' },
            {
              text: '论文',
              collapsed: false,
              items: [
                { text: '从学习word开始', link: '/academic/paper/start-with-word' },
                { text: '期刊与会议介绍', link: '/academic/paper/journal-and-conference-introduction' }
              ]
            }
          ],
          '/practice/': [
            { text: '专业实践', link: '/practice/' },
            {
              text: '简历',
              collapsed: false,
              items: [
                { text: '此刻开始提前规划', link: '/practice/resume/experience' },
                { text: '个人基础信息', link: '/practice/resume/basic-info' },
                { text: '项目经历', link: '/practice/resume/project-experience' },
                { text: '实习经历', link: '/practice/resume/internship-experience' },
                { text: '获奖经历', link: '/practice/resume/awarded-experience' },
                { text: '科研经历', link: '/practice/resume/research-experience' },
                { text: '如何写好一份简历', link: '/practice/resume/how-to-write-a-resume' }
              ]
            },
            {
              text: '技术路线',
              collapsed: false,
              items: [
                { text: 'Java 后端', link: '/practice/technology/java' },
                { text: 'Vue 前端', link: '/practice/technology/vue' },
                { text: 'Go 后端', link: '/practice/technology/go' },
                { text: 'C 后端', link: '/practice/technology/c' },
                { text: 'C++ 后端', link: '/practice/technology/cpp' },
                { text: 'Python 后端', link: '/practice/technology/python' },
                { text: '算法', link: '/practice/technology/algorithm' }
              ]
            },
            {
              text: '求职经验',
              collapsed: false,
              items: [
                { text: '国企', link: '/practice/job/state-owned-enterprise' },
                { text: '银行', link: '/practice/job/bank' },
                { text: '研究院', link: '/practice/job/research-institute' },
                { text: '互联网', link: '/practice/job/private-enterprise' },
                { text: '考公', link: '/practice/job/civil-servant' },
              ]
            },
            {
              text: '算法刷题',
              collapsed: false,
              items: [
                { text: '刷题路线', link: '/practice/algorithm/experience' },
              ]
            }
          ],
          '/resource/': [
            { text: '资源仓库', link: '/resource/' },
            {
              text: '技能树',
              collapsed: false,
              items: [
                { text: 'Java', link: '/resource/skill/java' },
                { text: 'Vue', link: '/resource/skill/vue' }
              ]
            }
          ],
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/MakerHu/Quae' }
        ]
      },
    }
  }
})
