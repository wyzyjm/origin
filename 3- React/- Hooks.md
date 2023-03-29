# Hooks

-   是纯函数

## 常用 hooks

-   `useState`
-   `useReducer`
-   `useEffect`
-   `useMemo`
-   `useCallback`
-   `useRef`
-   `useContext`

```ts
function Component(props) {
    const [count, setCount] = useState(1) // 组件自身状态.
    const [state, dipatch] = useReducer(function (state, action) {}, initState) // 管理比较复杂的数据类型.
    dispatch({ type: "add" })

    useEffect(() => {}) // 每次加载都执行
    useEffect(() => {}, []) // 加载完毕 执行一次
    useEffect(() => {
        // do something ...
        return () => {
            // 取消定时器等操作
        }
    }, [id]) // 依赖发生变化,开始执行

    useLayoutEffect(() => {}) //

    useMemo(() => {}, []) // 缓存结果
    useCallback(() => {}, []) // 缓存函数

    // context
    const countContext = createContext(vlaue) // 创建
    const count = useContext(countContext) // 使用

    // useRef
    const ref = useRef(null) // 返回值的.current属性,就像一个盒子可以用来存储任何值,且这个值的变化不会引起dom重新渲染.比如获取组件实例.
}
```

## React router

-   `useNavigate`,实现页面跳转 `useHistory`: 5 版本
-   `useLocation`,获取当前路由信息.
-   `useParams`,获取当前路由参数等.

## Redux

-   `useSelector`: 获取 redux 中的 state, 也可以通过 connect 函数来注入到组件中
-   `useDispatch`: 拿返回值来触发 state 修改
