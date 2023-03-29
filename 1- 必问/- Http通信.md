# http 请求

-   前后端分离: 核心思想就是 前端 html 页面 通过 ajax 调用后端 接口, 然后使用 json 数据进行交互.

-   axios 封装 主要是通过拦截器 分别处理 http 请求 和 响应
    -   请求拦截

```js
const service = Axios.create({
    baseURL: config.baseURL // 根据不同环境进行设置
    timeout:10000 , // 超时时间
    // withCredentials:true,
    // headers:{
    //     'Content-Type':'application/x-www-form-urlencoded' // 数据格式
    // },
    // transformRequest:data =>qs.stringify(data) qs第三方库
    // validateStatus:status=> /^(2/3)\d{2}$/.test(status) 设置状态码
})

// request intercept
service.interceptors.request.use(
    config => {
        let token = window.localStorage.getItem("jwtToken")
        if (token) {
            config.headers.Authorization = token
        }
        return config
    },
    error => Promise.reject(error)
)

// response intercept
service.interceptors.response.use(
    response => {
        // console.log('拦截',response);
        if (response.status === 200) {
            return response.data // 响应data
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        Promise.reject(error)
    }
)

export default service

```
