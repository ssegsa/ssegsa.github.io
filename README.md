ssegsa 修改 21.41

## 环境搭建

- [nodejs](https://nodejs.org/en)：v18.17.1（版本需要v18以上）
- [VitePress](https://vitepress.dev/)：v1.0.0-rc.24（版本1.0以上应该就行，但没都试过）
  ```sh
  # 安装 VitePress，如果要指定版本请到官网查询
  npm add -D vitepress
  ```

## 本地运行

1. 克隆项目到本地
   ```sh
   git clone https://github.com/ssegsa/ssegsa.github.io.git
   ```

2. 安装依赖

   ```sh
   # 进入项目根目录
   npm install
   ```

3. 启动项目

   本地启动项目分为两种，一种是开发模式，一种是预览模式，开发模式改代码后会实时在浏览器更新效果，预览模式则是更接近部署后的效果。

   ```sh
   # 开发模式
   npm run docs:dev

   # 预览模式，先 build 后 preview
   npm run docs:build
   npm run docs:preview
   ```

## 目录结构介绍

**框架相关的目录**

- components：组件包，可以用 vue 写一些自定义的组件并嵌入到 markdown 文档中，比如项目的贡献者列表就是用组件实现的
- docs：核心部分，存放网站的文章内容和网站的基本配置
  - .vitepress/config.ts：网站的核心配置文件，包括导航配置、目录配置、logo配置、语言配置等，详见[官方文档配置说明](https://vitepress.dev/reference/default-theme-config)，或者参考 VitePress 的[源代码](https://github.com/vuejs/vitepress/blob/main/docs/.vitepress/config.ts)中的配置
  - public：存放网站等一些公共资源，比如logo和网站图标
  - index.md：网站的首页内容，详见[官方文档说明](https://vitepress.dev/reference/default-theme-home-page)
  - 其他几个目录是文章目录，放下面说明
- .github：使用 GitHub Action 自动打包部署到GitHub Pages的配置文件，一般不用管
- .gitignore：Git 的忽略文件配置，已经配好了，一般也不用管
- LICENSE：本项目使用的开源协议，MIT 协议，一般也不用管
- package-lock.json：不用管
- package.json：项目的依赖和启动脚本的配置等

**网站文章相关的目录**

- docs
  - about：了解我们页面以及一些总体介绍性的文章
  - academic：存放学术科研模块相关文章
  - practice：存放专业实践模块相关文章
  - resource：存放资源仓库模块相关文章

这里说明一下，`docs` 目录是网站文章的根目录，从根目录到文章的路径就是该文章在网站中的路由地址，比如 `/docs/adademic/paper/start-with-word.md` 这篇文章的地址就是 `http://localhost:5173/academic/paper/start-with-word.html` 其中有一个比较特殊的文章是每个文件夹下的 `index.md`，它是这个文件夹路径下的默认页面，比如路由指定到 `http://localhost:5173/academic/paper/`，就会去找 `paper` 文件夹下的 `index.md` 如果没找到就会报 404，一般 `index.md` 可以用来做某个模块的总体介绍。

根据网站内容的需要，可以在 `docs` 文件夹下灵活增删上述的网站文章相关的目录，并在 `/docs/.vitepress/config.ts` 中配置相关的导航（当然如果不想在导航中展示也可以不配置，看需要）

## 正常情况下添加并发表一篇文章的步骤

1. 先准备好一篇 markdown 格式的文章，假设叫 `java.md`
2. 在 `docs` 目录中找到该文章对应分类的文件夹，如果没有就创建相应的分类文件夹存放该文章，`java.md` 这篇文章我想放到 专业实践-技术路线 模块中，那么就将其放到 `/practice/technology/` 文件夹下
3. 到 `/docs/.vitepress/config.ts` 中配置文章的边栏目录，比如这篇文章我要放到“专业实践模块”的“技术路线”子模块，那就在 `/docs/.vitepress/config.ts` 中找到 `function sidebarPractice()`，并在技术路线的配置中添加一行 `{ text: "Java 后端", link: "/practice/technology/java" }`，这样导航栏的技术路线子模块就会多一个“Java 后端”目录了
4. 本地看一下效果
   ```sh
   # 一般开发模式看一下效果没问题就行
   npm run docs:dev

   # 如果不放心部署后的效果是否一致，可以构建并预览一下看看
   npm run docs:build
   npm run docs:preview
   ```
5. 效果没问题就提交上传到 GitHub，过一会儿 GitHub Action 就会自动打包部署到 GitHub Pages
6. 最后就是到 https://ssegsa.github.io/ 看效果了

## 将项目的贡献者手动添加到首页

在 `/docs/public/contributors.json` 中添加贡献者的基础信息配置，该配置信息有贡献者提供，如下

```json
{
   "login": "贡献者用户名",
   "avatar_url": "https://avatars.githubusercontent.com/u/{GitHub id}?v=4",
   "html_url": "https://github.com/{用户名}"
}
```

通过 Pull Request 或者直接提交代码的方式，会通过 API 自动获取贡献者信息，不用手动添加，此方式主要用于通过邮箱投稿的贡献者。

## 贡献者

感谢项目的所有[贡献人员](https://github.com/ssegsa/ssegsa.github.io/graphs/contributors)❤️

## License

[MIT](https://github.com/MakerHu/Quae/blob/main/LICENSE)
