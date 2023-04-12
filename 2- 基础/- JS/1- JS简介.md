# JS 简介

## js 为什么是单线程

-   JS 主要是作为浏览器脚本语言, 主要实现用户与浏览器的交互, 以及操作 DOM, 这决定了它只能是单线程.
-   举个例子: 如果是多线程, 它们同时要操作一个 dom, 那么浏览器就一脸茫然,不知道该如何执行.
-   为了利用多核 CPU 的计算能力,H5 推出了 web worker 标准,允许 JS 创建多个子线程,但子线程完全受主线程控制, 且不能操作 DOM

## 三大组成

-   `ECMA Script`:
    -   平常写的 js 语法: ES5, ES6.
-   `DOM` (文档对象模型): 操作 dom 的一些 API,
    -   document.querySelectorAll, getElementById(), appendChild()之类.
-   `BOM` (浏览器): 对浏览器窗口进行访问.
