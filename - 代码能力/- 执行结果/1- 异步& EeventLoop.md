# 异步

-   31 题

-   `promise状态`
    -   内部状态不变, 没有输出值.
    -   只能被修改一次
-   `promise.then`:
    -   pending 状态不执行, 等到有结果的时候再执行
    -   .then 接收上一次的 return 值, 如果没有就是 undefined
    -   第二个参数 捕获错误, 比.catch 早
-   promise 返回任何非 promise 值, 都会包装成一个 promise 对象, 算成功

-   `promise返回值`:

    -   非 promise 值, 都会被包装成 promise 对象
    -   不能返回 promise 自身,否则会造成死循环
    -

-   `then catch`

    -   期望接收一个函数参数, 如果不是,就会发生值 透传.
    -   then 第二个参数 捕获错误 > .catch 捕获

-   `async函数中 抛出错误, 就会终止,不会继续执行`
-   链式调用 实例是有返回值的

<!--
输出:

微任务:

宏任务:

-->
