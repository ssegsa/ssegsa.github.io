[⬅️ 返回文章](contribution-guide#使用-markdown-语法写文章)

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
    src="//player.bilibili.com/player.html?aid=786787338&bvid=BV1414y1B7Na&cid=1223612545&page=1"
    scrolling="no"
    border="0"
    frameborder="no"
    framespacing="0"
    allowfullscreen="true"
    style="
    margin-top: 10px;
    border-radius: 10px;
    width: 100%;
    aspect-ratio: 16/9;
    box-shadow: 2px 2px 4px #c9c9c9;
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

更多语法请查看[Markdown 教程](https://markdown.com.cn/basic-syntax/)，以及[VitePress 拓展语法](https://vitepress.dev/guide/markdown)

[⬅️ 返回文章](contribution-guide#使用-markdown-语法写文章)