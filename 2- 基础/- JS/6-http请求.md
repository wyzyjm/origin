# Http 请求

1. Ajax:

    - 是一种无需重新加载整个网页,就能更新部分内容的技术.
    - 通过 new XMLhttprequest 实例对象,然后发送请求,监听响应状态等

2. Fetch

    - 是在 ES6 出现的,使用了 es6 中的 promise 对象,没有使用 XMLHttpRequest 对象.
    - 优点: 语法简洁,更语义化了
    - 缺点:
        - 只会对网络请求报错, 当服务器返回 400,500 时都当做成功.
        - 默认不会携带 cookie, 需要配置{creadentials:'include'}

3. Axios
    - 基于 promise 封装的 http 请求库.
    - 支持请求拦截 和响应拦截.
    - 支持取消请求. 方式配置 cancelToken 属性:axios.CancelToken.source().token |
