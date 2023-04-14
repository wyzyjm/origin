# Promise

-   是一种解决异步编程的方案, 通过链式调用的方法
-   本身有三种状态: pendding, fulfilled, reject

-   本身的方法:

    -   `Promise.resolve()`: 返回成功值
    -   `Promise.reject()`: 返回失败值
    -   `Promise.all()`: 返回成功的
    -   `Promise.allSettled()`: 不管成功失败
    -   `Promise.race()`: 第一个返回值
    -   `Promise.any()`: 第一个返回值

-   实例方法:
    -   `.then`: 捕获成功失败的值
    -   `.catch`:捕获失败
    -   `.finally`: 无论成功失败都会执行
