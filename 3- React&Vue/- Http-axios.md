# http 请求

-   目的:
    -   请求拦截, 在请求头中添加 token.
    -   响应拦截,处理常见错误,
    -   api 集中式管理.

```js

import { Axios } from 'axios'

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
        /*
            config: baseURL,headers, timeout, data, parames,等.
         */
        let token = window.localStorage.getItem("jwtToken")
        if (token) {
            config.headers.Authorization = token
        }
        return config
    },
    error => Promise.reject(error)
)

// response 统一执行某些操作。
service.interceptors.response.use(
    response => {
        /*
            response: status, data, statusText, header,request,config
         */
        if (response.status === 200) {
            return response.data // 响应data
        } else {
            return Promise.reject(response)
        }
        /*
            error.responese.status
                401: 未登录, 跳转到登录页
                404: 请求地址出错
                500: 服务端出错
         */
    },
    error => {
        Promise.reject(error)
    }
)

export default service

```
