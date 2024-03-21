import { defineConfig, type DefaultTheme } from "vitepress";
import taskLists from 'markdown-it-task-lists';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    // ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ["link", { rel: "icon", href: '/favicon.ico' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh-CN' }],
    ['meta', { name: 'og:site_name', content: '软件研会' }],
    ['meta', { name: 'og:image', content: 'https://ssegsa.github.io/ssegsa-og.jpg' }],
    ['meta', { name: 'og:url', content: 'https://ssegsa.github.io/' }],
    ['meta', { name: 'og:description', content: '就喜欢被知识包围的感觉！' }],
  ],
  lastUpdated: true,
  ignoreDeadLinks: true,
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(taskLists)
    }
  },
  themeConfig: {
    logo: "/logo.svg",
    outline: "deep", // 文章右侧目录层级
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present SSEGSA",
    },
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
  },
  // 国际化
  locales: {
    root: {
      title: "软件研会",
      description: "致力于打破软件学院的信息壁垒",
      label: "简体中文",
      lang: "zh-CN", // optional, will be added  as `lang` attribute on `html` tag
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        langMenuLabel: "切换语言",
        darkModeSwitchLabel: "外观",
        sidebarMenuLabel: "目录",
        returnToTopLabel: "返回顶部",
        lastUpdatedText: "上次更新",
        outlineTitle: "本章目录",
        docFooter: {
          prev: "上一篇",
          next: "下一篇",
        },
        editLink: {
          pattern: 'https://github.com/ssegsa/ssegsa.github.io/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页'
        },
        //顶部导航栏
        nav: nav(),
        //侧边目录
        sidebar: {
          "/academic/": sidebarAcademic(),
          "/practice/": sidebarPractice(),
          "/resource/": sidebarResource(),
        },
        //顶部链接
        socialLinks: [
          {
            icon: "github",
            link: "https://github.com/ssegsa/ssegsa.github.io",
          },
        ],
      },
    },
  },
});

// 顶部导航栏
function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '首页',
      link: '/'
    },
    {
      text: '学术科研',
      link: '/academic/',
      activeMatch: '/academic/'
    },
    {
      text: '专业实践',
      link: '/practice/',
      activeMatch: '/practice/'
    },
    {
      text: '资源库',
      link: '/resource/',
      activeMatch: '/resource/'
    },
  ]
}

// 学术模块的目录
function sidebarAcademic(): DefaultTheme.SidebarItem[] {
  return [
    { text: "学术研究", link: "/academic/" },
    {
      text: "论文",
      collapsed: false,
      items: [
        { text: "从学习word开始", link: "/academic/paper/start-with-word" },
        {
          text: "期刊与会议介绍",
          link: "/academic/paper/journal-and-conference-introduction",
        },
        {
          text: "论文相关网站介绍",
          link: "/academic/paper/paper-website",
        },
      ],
    },
  ];
}

// 专业实践模块的目录
function sidebarPractice(): DefaultTheme.SidebarItem[] {
  return [
    { text: "专业实践", link: "/practice/" },
    {
      text: "简历",
      collapsed: false,
      items: [
        {
          text: "此刻开始提前规划",
          link: "/practice/resume/experience",
        },
        { text: "个人基础信息", link: "/practice/resume/basic-info" },
        {
          text: "项目经历",
          link: "/practice/resume/project-experience",
        },
        {
          text: "实习经历",
          link: "/practice/resume/internship-experience",
        },
        {
          text: "获奖经历",
          link: "/practice/resume/awarded-experience",
        },
        {
          text: "科研经历",
          link: "/practice/resume/research-experience",
        },
        {
          text: "如何写好一份简历",
          link: "/practice/resume/how-to-write-a-resume",
        },
      ],
    },
    {
      text: "求职经验",
      collapsed: false,
      items: [
        { text: "国企", link: "/practice/job/state-owned-enterprise" },
        { text: "银行", link: "/practice/job/bank" },
        { text: "研究院", link: "/practice/job/research-institute" },
        { text: "互联网", link: "/practice/job/private-enterprise" },
        { text: "考公", link: "/practice/job/civil-servant" },
      ],
    },
    {
      text: "其他经验",
      collapsed: false,
      items: [
        { text: "学会检索", link: "/practice/other/learn-to-search" },
        { text: "版本管理工具Git使用指南", link: "/practice/other/git" },
        { text: "文件管理的一种思路", link: "/practice/other/file-management" },
        { text: "怎样做好小组作业", link: "/practice/other/teamwork" },
        { text: "本科学习经验分享", link: "/practice/other/undergraduate-study-experience" },
        { text: "本科新生经验分享（学习、竞赛、入党等）", link: "/practice/other/undergraduate-study-experience-01" },
        { text: "2023年全国大学生可以参加的比赛目录", link: "/practice/other/competition-list" },
        { text: "大三学生学习、考研、保研、实习、毕设建议", link: "/practice/other/junior-advise" },
      ],
    },
    {
      text: "Java",
      collapsed: false,
      items: [
        { text: "Java 技术路线", link: "/practice/java/" },
        { text: "快速上手SpringBoot项目（登录注册保姆级教程）", link: "/practice/java/springboot-login-demo" },
      ],
    },
    {
      text: "Vue",
      collapsed: false,
      items: [
        { text: "Vue 技术路线", link: "/practice/vue/" },
        { text: "Vue 实现登录注册功能（前后端分离完整案例）", link: "/practice/vue/vue-login-demo" },
      ],
    },
    {
      text: "算法刷题",
      collapsed: false,
      items: [
        { text: "刷题路线", link: "/practice/algorithm/" },
      ],
    },
  ];
}

// 资源仓库模块的目录
function sidebarResource(): DefaultTheme.SidebarItem[] {
  return [
    { text: "资源库", link: "/resource/" },
    {
      text: "资源分类",
      collapsed: false,
      items: [
        { text: "综合网站集合", link: "/resource/external-resources" },
        { text: "Java", link: "/resource/java" },
        { text: "Vue", link: "/resource/vue" },
      ],
    },
  ];
}
