# MVVM

-   随着前端技术的不断发展, 出现了前后端分离,前端也可以处理复杂的业务逻辑.
-   要将 这些数据 展示给用户来看, html+css + js, js 由 bom/dom/ECMA 标准语法组成, 既要负责获取数据,处理数据, 并操作 dom 将数据渲染到 html 中. 比较复杂.
-   是一种前端架构的设计模式, 最早由微软提出来,是 MVC 的改进版.
-   目的是为了让开发者更好的使用 JS 来开发应用程序.

    mvvm 字面意思: model-view-viewModel

-   -   m model: 数据层, 后端传过来的数据, 以及处理这些数据的业务逻辑.
    -   v view: 视图层, 用户看到的页面,也可以理解为以 html css 的形式将数据展示给用户.
    -   vm viewModel: 充当的是数据层与视图层的桥梁. 把 model 的数据同步到 view, 还负责把 view 的修改同步回 model.
        -   `模型 -> 视图`: 通过数据绑定.的方式将 model 转化为视图.
        -   `视图 -> 模型`: 通过 dom 监听实现视图到 模型的转化.
        -   也就说 数据与视图的转化是自动的,开发者只需要关注业务逻辑,不需要手动操作 dom, 复杂的数据状态维护完全由 vm 来进行管理.
        -   拿一个列表渲染来说, 我们只需要关注如何处理这个 list 数组,而不用去关注如何让它在页面渲染.
