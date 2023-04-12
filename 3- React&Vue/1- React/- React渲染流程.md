# React 渲染流程

-   采用了虚拟 dom,

1. 设计理念
    - 跨平台: => 虚拟 dom
    - 快速响应:
        - 异步可中断: fiber 对任务进行切片,`requestIdleCallback`
        - 增量更新: 添加元素时, 老的不会重新渲染,只添加新的

Scheduler: 选择高优先级的任务进入 reconciler.
Reconciler: 计算变更的内容.
React-dom: 把内容渲染到页面上.

大多设备刷新频率是 1s 60 次, 浏览器的刷新跟设备的刷新频率保持一致就不会出现卡顿的情况.
每一帧里面 16.66ms: 要执行`响应用户事件,执行 js, 页面布局, 页面绘制等事情`, 空余时间(`requestIdleCallback`)

React18 版本 引入了 `fiber`, React 将任务切片

-   `fiber` 就是一个个执行单元, 大概是 5 毫秒多点
-   `requestIdleCallback` 开发者执行`低优先级`的工作,而不影响关键事件, 如动画和输入响应
