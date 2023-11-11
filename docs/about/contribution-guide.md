# 投稿指南

::: tip 提示
在你投稿或参与本网站的开发之前，请先阅读本文，我们提供两种投稿方式。

[1. 通过 Pull Request 投稿（推荐）](#通过-pull-request-投稿)

[2. 通过邮箱投稿（简单）](#通过邮箱投稿)
:::

第一种方式，你既可以参与开发本网站，也可以上传你的文章，通过 Pull Request 的方式向我们请求合并，我们的管理员在审核内容没问题后，将会合并你的请求，通过这种方式，我们将通过脚本获取你的 GitHub 账号并展示在我们首页的**贡献者名单**里。

第二种方式是直接向我们的邮箱发送你的文章，通过这种方式，我们可能没办法自动获取到你的 GitHub 账号，但你可以主动为我们提供你的信息，我们将手动添加你的信息到贡献者名单里并展示。

但在投稿前，首先需要准备一篇 **markdown 语法**的文章。因此，发表一篇文章一共需要两步：[1. 写文章](#使用-markdown-语法写文章) [2. 投稿](#投稿方式)

## 规范与要求

::: tip 投稿内容
1. 学术科研、就业、技能实践方面的资源链接、文件、博客链接等

2. 关于以上内容的，自己编写的指南、教程、博客等
:::

::: warning 注意事项
1. 投稿内容不得涉及违背社会主义核心价值观的内容，不得包含反党、反人民和反社会的言论，不得出现有损学校和学院名誉的内容

2. 投稿内容不得包含侵犯其他个人或组织利益的主观言论
:::

为了保证部署后内容能够正常显示，在正式开始写文章前请注意以下几点：

- 文件名使用英文以及连字符组成，不能出现空格以及其他特殊符号，如：`contribution-guide.md`
- 如果文章中需要展示图片，请将图片放到与文章名同名的文件夹中，并使该文件夹与文章位于同级目录下
  ```sh
  .
  ├── contribution-guide     # 存放图片的文件夹（与文章同名）
  │   └── demo.jpg           # 图片
  └── contribution-guide.md  # 文章
  ```
- 引用图片时请使用**相对路径**，如上面例子的文件结构，文章 `contribution-guide.md` 中引用了 `demo.jpg` 的图片，则在文章中通过下面的方式引用
  ```md
  ![图片替代名](contribution-guide/demo.jpg)
  ```

## 使用 markdown 语法写文章

本站的文章仅支持使用 markdown 语法，如果你不熟悉 markdown 语法，请不用担心！因为我们在写文章时一般只需要用到其中的很少语法，如：标题、加粗、斜体、代码块、图片、超链接等。下面为你演示这几种基础语法等使用，其他更多语法请参考[Markdown 教程](https://markdown.com.cn/basic-syntax/)，以及本网站支持的[拓展语法](https://vitepress.dev/guide/markdown)

⚠️ 特别说明一下，请注意文章的命名要求，如果文章中携带图片，也请注意图片的存放规范，具体查看[规范与要求](#规范与要求)。

~~~md
# 标题一

## 标题二

### 标题三

> 这是一段引用这是一段引用这是一段引用这是一段引用这是一段引用这是一段引用这是一段引用这是一段引用这是一段引用这是一段引用这是一段引用这是一段引用这是一段引用这是一段引用这是一段引用这是一段引用

这是一段话

- 无序列表
  - 子列表
    - 子子列表
- 无序列表

1. 有序列表
2. 有序列表

- [ ] 未勾选的列表
- [x] 勾选的列表

*这是斜体*

**这是加粗**

***这是粗体加斜体***

~~这是删除线~~但要注意是英文的波浪线

下面是代码块，可以用三个反引号 (`) 或者三个 (~) 

```json
{ 
    "name": "SSEGSA",
    "age": 1
}
```

[超链接](https://github.com/ssegsa/ssegsa.github.io)

![图片替代名](contribution-guide/demo.jpg)

当然也可以嵌入视频，最好是B站视频

<iframe
    src="//player.bilibili.com/player.html?aid=786787338&bvid=BV1414y1B7Na&cid=1223612545&page=1&autoplay=0"
    scrolling="no"
    frameborder="no"
    framespacing="0"
    allowfullscreen="true"
    style="
    margin-top: 10px;
    border-radius: 10px;
    width: 100%;
    aspect-ratio: 16/9;
    "
></iframe>



## 以下是本站的拓展语法，不是 markdown 的基础语法

::: info
这是一个信息框
:::

::: tip
这是一个提示框
:::

::: warning
这是一个警告框
:::

::: danger
这是一个危险警告框
:::

::: details
这是一个细节隐藏框
:::

::: details
```sh
# 也能隐藏代码块
```
:::

::: info 我是一个标题
只要在后面加个空格就能自定义框的标题
:::

::: code-group

```java [Java 实现]
System.out.println("Java 代码")；
```

```c [C 实现]
printf("C 代码");
```

:::

~~~

[➡️ 点击查看渲染后的效果](markdown-demo.md)

## 投稿方式

### 通过 Pull Request 投稿


### 通过邮箱投稿

1. **准备好 markdown 文章**

    根据[规范与要求](#规范与要求)准备好你的 markdown 文章

2. **准备好贡献者信息（非必需）**

    通过邮箱投稿的方式，我们无法获取到你的 Github 账户信息，因此，为了表达我们对你做出贡献的感谢，我们非常期望你能够为我们提供以下格式的 Json 信息

    ```json
    {
        "login": "你的 GitHub 用户名",
        "avatar_url": "https://avatars.githubusercontent.com/u/{GitHub id}?v=4",
        "html_url": "https://github.com/{用户名}"
    }
    ```

    这个 Json 中的三个字段分别表示你的昵称、头像以及社交平台的首页。要想获取上面的信息也非常简单，你只需要在浏览器中输入以下链接（注意修改链接中的用户名）：

    ```sh
    https://api.github.com/users/{用户名}
    ```

    即可收到类似下方的返回结果：

    ::: details 返回结果参考
    ```json
    {
        "login": "{用户名}",
        "id": 12345678,
        "node_id": "LKSJDF3...LKJSDF",
        "avatar_url": "https://avatars.githubusercontent.com/u/{id}?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/{用户名}",
        "html_url": "https://github.com/{用户名}",
        "followers_url": "https://api.github.com/users/{用户名}/followers",
        "following_url": "https://api.github.com/users/{用户名}/following{/other_user}",
        "gists_url": "https://api.github.com/users/{用户名}/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/{用户名}/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/{用户名}/subscriptions",
        "organizations_url": "https://api.github.com/users/{用户名}/orgs",
        "repos_url": "https://api.github.com/users/{用户名}/repos",
        "events_url": "https://api.github.com/users/{用户名}/events{/privacy}",
        "received_events_url": "https://api.github.com/users/{用户名}/received_events",
        "type": "User",
        "site_admin": false,
        "name": "{用户名}",
        "company": null,
        "blog": null,
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 20,
        "public_gists": 0,
        "followers": 6,
        "following": 0,
        "created_at": "2019-12-03T15:40:36Z",
        "updated_at": "2023-11-09T13:02:02Z"
    }
    ```
    :::

    接着你只需要复制该 Json 并删除无用字段，只保留 `login` `avatar_url` `html_url` 三个字段即可。

3. **将文章、图片资源以及贡献者信息打包到一个压缩文件夹里发送到邮箱**
   
    压缩文件中包含：
    ```sh
    .
    ├── contribution-guide     # 存放图片的文件夹（与文章同名）
    │   └── demo.jpg           # 图片
    ├── contribution-guide.md  # 文章
    └── my-github-info.json    # 贡献者的信息
    ```

    邮箱地址：test#test.com（⚠️ 注意将 `#` 更改为 `@`）