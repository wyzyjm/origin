# data 为什么是个函数

-   用 Vue 开发, 所有的组件都是挂在 vue 上的, 所以 vue 根节点可以用对象.
-   组件声明就是创建构造函数的过程, 然后在 prototype 上添加了 data 属性,当组件被使用就是 new 实例化的过程,
-   当组件被多次调用, 他们共用的是一份 data, 其中一个组件状态改变, 必然会影响另一个组件的数据.
-   因此只有将 data 写成函数, 组件间数据才能互不影响.
-   根实例上可以写对象的原因是, 一个项目中 Vue 只被实例化了一次,不用考虑复用的问题.
