# React & Vue

-   主流前端框架 React 和 Vue.

-   本质: 都是前端用来构建用户界面的 JavaScript 框架.
-
-   目的: 为了减少 DOM 操作,提高页面渲染性能, 让开发者更方便的使用 js 来构建应用程序.
    -   `声明式`: 支持用户编写描述用户界面的代码, 然后由框架对这些进行编译后呈现 dom.
        -   渲染一个列表: Vue: v-for 指令, React 一个 map 函数
    -   `组件化`: 支持将页面拆分成多个组件的编写方式,来提高代码复用性,同时也增加了可维护性.
    -   `客户端路由`:
        -   而不像传统多页面应用, 每个页面的加载都要请求一个 html 文件.然后浏览器解析 html 文件,再加载对应的 js,发送请求等.
        -   而单页面应用则是加载一个 html,然后通过显示不同的组件,来展示一个伪页面
        -   然后浏览器地址栏有两种模式, history 模式 和 hash 模式, history 通过操作浏览器 history api, 如 pushState, replaceState, go, back 等来实现添加替换及前进后退, 浏览器并不会刷新页面
        -   手动刷新页面的时候, 浏览器才会发起请求, 因此还需要在服务端配置,所有 404 请求响应到 index.html.
        -   具体实现 有对应的库: vue:vue-router, React: react-router 和 react-router-dom.
    -   `配套工具`: 这些框架都有庞大而活跃的社区, 因此每个框架都提供了各种工具来改善开发体验
        -   如可以添加测试脚本,来确保应用的表现行为, 比较多的测试框架有 jest, 我用过的一个是微软 playwright, 都是测一些 UI 和 行为.
        -   `全局状态管理库`:
            -   Vue: vuex, React: Redux mobox 等.
            -   比较:它们的大致思想一致的,只不过概念不同而已,
            -   都维护了一个全局的 state,然后修改 state 的方式也是确定的,
            -   Redux 通过 reducer 来修改, 通过 dispatch action 来告诉 redux 如何修改 state,
            -   而 vuex 通过 mutation,还引入异步的概念 action,也是通过 commit mutation 方法来修改 state,使用的话同步 commit mutation 方法,异步 dispatch
        -   `支持多端运行`:
            -   Vue: weex 来实现移动端
            -   React: react native 来实现.
        -   `脚手架`:
            -   React: create-react-app
            -   Vue:vue-cli, 但是现在又退出了一个 vite.

## 区别

-   数据流:
    -   React:单向数据流, 我觉得和 react 中提到的受控组件差不多.
    -   Vue:实现了双向绑定, 具体就是 v-model 指令, 其实就是 v-bind:value 和 v-on:input|change 事件 的语法糖.
-   diff 算法不同:
    -   react 比较完,一次更新 dom
    -   Vue: 边比较,边更新.
-   核心思想 与代码编写上不同了
    -   Vue: 为了方便开发者, dom.逻辑和 样式都是分开来写的, 然后引入了很多概念, 像指令, js 中计算属性,watch 监听等等. vue3 已经有了很大改善. 通过 component api
    -   React: 一切皆是 js, 随着 16.8 版本以后对函数式组件的支持,没有了类组件复杂的生命周期, 逻辑可以不用写的那么散落, 这使得开发更简洁高效了
