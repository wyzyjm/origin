# setState

1. 是同步还是异步的?

-   可能是同步的, 也可能是异步的
-   异步:
    -   React 能够管理的地方: 事件, 生命周期中, 是异步的.
    -   因为 react 为了减少 render 调用次数, 会收集所有状态变更,比对优化, 完了之后,一次性更新.
-   同步:
    -   原生事件中,
    -   在 18 版本之前, settimeOut 包裹的还是同步的,
    -   在 18 版本中 settimeOut 就变成了异步的.
    -   也就是 dom 挂载方式由 ReactDom 变为通过使用 client 下面的 createRoot 节点来挂载的方式后,

2.  如何同步拿到修改以后的值?

-   直接将新的值传给要使用的方法中
-   useRef 存一下, 要么在 setState 函数中存, 要么 useEffect 依赖要改变的值,
