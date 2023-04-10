# Computed 和 watch

## Computed: 计算属性

    -   多对一的关系,
    -   有缓存的,依赖不变, 不会重新执行.
    -   值是可以被改变的, 只不过得换种写法, setter 和 getter的方式.

## watch: 监听某一个值, 如果要立即执行,配置 immediate

    -   一对多的关系

```js
export default {
    name: "component",
    data() {
        return {
            first_name: "王",
            last_name: "小明"
        }
    },
    computed: {
        name() {
            return this.first_name + this.last_name
        },
        name: {
            get() {
                return this.first_name + this.last_name
            },
            set(val) {
                return val
            }
        }
    },
    watch: {
        last_name(newValue, oldValue) {}, // 第一次加载不会执行
        last_name: {
            handler(newValue, oldValue) {},
            immediate: true, // 立即执行
            deep: true // 深度监听
        }
    }
}
```
