# Vue router

```js
createRouter({
    history: ,
    routes:[
            {
            path:,
            name:,
            component:()=>import('../a.vue')
            }
        ]
})
```

##

-   this.$router 是负责整个应用的路由, router.push(), router.replace()

-   this.$route 是指当前页面的路由信息: name,path, meta 带参等
