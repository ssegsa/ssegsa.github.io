---
description: 用 Python 标准库做离线练习，区分 API 基础地址、请求路径与实际调用验收。
---

# 调用 API 前，先做一次地址预检

小组项目接入一个 HTTP API 时，常见的第一道障碍不是业务代码，而是配置里的地址：文档给的是网站首页、基础地址，还是某个操作的完整 URL？把完整路径又填进 SDK 的基础地址字段，可能得到重复路径；只复制域名，又可能漏掉版本前缀。

这篇练习适合刚接触 Python 和 HTTP API 的同学。准备 Python 3 即可，不需要安装第三方库、注册账号或准备密钥。所有示例只处理字符串，不发送网络请求。学完后，你应该能够写出一份明确的地址配置说明，并为自己的 URL 拼接代码补上测试。

## 一、把三个地址写在不同的格子里

下面是假设服务的配置，不对应任何可调用的生产服务：

| 项目 | 示例 | 要核对的问题 |
| --- | --- | --- |
| 服务来源 | `https://api.example.test` | 这是准备连接的服务域名吗？ |
| 基础地址 | `https://api.example.test/v1/` | 客户端字段要求根地址还是带版本的前缀？ |
| 完整请求 URL | `https://api.example.test/v1/chat/completions` | 调用某个方法后，最终请求路径是什么？ |

这三个值不是互相替换的配置。具体该填哪一个，应由正在使用的客户端文档决定。例如，OpenAI Python SDK 提供 `base_url` 配置，但不能由参数名称推断所有 SDK 都使用同一种 URL 拼接规则。请核对所安装版本的文档和实际请求地址。[官方 SDK 说明](https://github.com/openai/openai-python#configuring-the-http-client)

还要单独写下准备调用的接口、请求体格式与凭证来源。地址正确不代表服务支持你要用的方法，也不代表密钥属于这个服务。小组共享的配置说明只写密钥变量名和来源，不写密钥值。

## 二、用四个断言观察路径怎样变化

Python 的 `urljoin` 用于把基础 URL 与相对引用合成绝对 URL。下面研究的是这个标准库函数的行为，**不是 OpenAI SDK 或其他客户端内部实现的模拟**。如果项目并没有调用 `urljoin`，不要拿这四个结果直接解释它的报错。

将代码保存为 `url_join_lab.py`：

```python
from urllib.parse import urljoin

cases = [
    (
        "基础地址以斜线结尾",
        "https://api.example.test/v1/",
        "chat/completions",
        "https://api.example.test/v1/chat/completions",
    ),
    (
        "基础地址末段没有斜线",
        "https://api.example.test/v1",
        "chat/completions",
        "https://api.example.test/chat/completions",
    ),
    (
        "第二个参数从根路径开始",
        "https://api.example.test/v1/",
        "/chat/completions",
        "https://api.example.test/chat/completions",
    ),
    (
        "第二个参数是完整URL",
        "https://api.example.test/v1/",
        "https://other.example.test/check",
        "https://other.example.test/check",
    ),
]

for label, base, relative, expected in cases:
    actual = urljoin(base, relative)
    assert actual == expected, (label, actual, expected)
    print(label, "=>", actual)

print("4 个地址拼接用例通过；没有发送网络请求。")
```

在终端运行 `python3 url_join_lab.py`。第一种情况保留 `/v1/` 前缀；第二种情况把 `v1` 当作需要替换的末段；第三种情况从域名下的根路径重新开始；第四种情况连域名也被替换了。这些行为可对照 [Python 3.12 的 `urljoin` 文档](https://docs.python.org/3.12/library/urllib.parse.html#urllib.parse.urljoin)。

因此，如果是自己编写的 URL 拼接逻辑，至少要用这四类输入检查边界。不要让不可信输入直接决定第二个参数，再把带凭证的请求发给拼接结果。示例中的最后一项只演示字符串变化，不会访问另一个服务。

## 三、拆开 URL，再检查约定

不要只看地址“长得像不像”。`urlsplit` 可以拆出协议、主机和路径，但它不是完整的 URL 合法性或安全性检查器。下面把练习的预期域名与路径写死，分别报告哪里与约定不一致。[Python URL 解析说明](https://docs.python.org/3.12/library/urllib.parse.html#url-parsing-security)

保存为 `url_contract_lab.py`：

```python
from urllib.parse import urlsplit

def check_contract(url):
    # 这里只检查本练习的约定，不能用作生产环境的安全过滤器。
    parts = urlsplit(url)
    problems = []
    if parts.scheme != "https":
        problems.append("scheme")
    if parts.hostname != "api.example.test":
        problems.append("host")
    if parts.path != "/v1/chat/completions":
        problems.append("path")
    if parts.query or parts.fragment:
        problems.append("query_or_fragment")
    if parts.username is not None or parts.password is not None:
        problems.append("userinfo")
    return problems

checks = [
    ("https://api.example.test/v1/chat/completions", []),
    ("https://api.example.test/chat/completions", ["path"]),
    ("https://api.example.test/v1/v1/chat/completions", ["path"]),
    ("https://other.example.test/v1/chat/completions", ["host"]),
    ("http://api.example.test/v1/chat/completions", ["scheme"]),
    (
        "https://api.example.test/v1/chat/completions?demo=1",
        ["query_or_fragment"],
    ),
    (
        "https://demo:placeholder@api.example.test/v1/chat/completions",
        ["userinfo"],
    ),
]

for url, expected in checks:
    assert check_contract(url) == expected

print("7 个地址约定用例通过；没有发送网络请求。")
```

运行 `python3 url_contract_lab.py`，预期得到最后一行通过提示。示例中的 `demo:placeholder` 是为了触发检查而写的假值，不是真实凭据。

这个函数刻意只检查列出的五项：它没有完整校验端口、编码、重定向、DNS 或其他网络行为，也不能证明目标站值得信任。练习的意义是把“配置看起来没问题”改成明确、可重复的断言。下一步可以自行添加端口和空字符串用例，先说明想接受哪些输入，再修改检查逻辑。

## 四、把预检结果交给真正的调用验收

离线通过只能证明示例字符串和检查逻辑符合约定。接入实际服务前，还需要把客户端版本、协议、凭证签发方和模型／资源权限对应起来；这些不能由上面的断言验证。

建议小组保留一份不含秘密的验收记录：

```text
客户端与版本：
配置字段名：
文档中的基础地址要求：
预期协议、主机、端口和路径：
准备使用的接口及请求体格式：
凭证变量名及签发方（不填密钥值）：
是否已经得到实际调用授权：
实际调用时间／请求标识：未调用
实际响应／用量：未知
```

先完成地址预检，再由获得授权的项目成员决定是否进行最小调用。实际调用时记录经过脱敏的目标地址、响应状态和请求标识；不要把认证头或完整私有输入粘贴到公开 Issue。即使一次短请求成功，流式、工具调用或其他接口仍应按各自的协议单独验收。

## 资料与贡献说明

- 官方参考：[Python URL 解析库](https://docs.python.org/3.12/library/urllib.parse.html)、[OpenAI Python SDK](https://github.com/openai/openai-python)。文档可能随版本更新，示例中的标准库代码已在 Python 3.12.13 下执行上述 11 个离线用例。
- 可选延伸：[Base URL、协议与认证的配置核对指南](https://www.cloudmist.cloud/base-url.html)。这是云岚API维护的公开教程，阅读本练习无需访问该服务或购买任何产品。
- 投稿者为云岚API维护者，云岚API是独立第三方服务，不代表 OpenAI 或其他模型厂商。本稿为适配软件专业学习场景重新编写的教程，由 AI 辅助整理；仅验证了文中离线示例，没有调用真实模型 API，也未对第三方服务进行兼容性或效果实测。
