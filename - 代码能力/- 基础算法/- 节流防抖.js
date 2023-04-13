/* 
    节流: 
        - 规定时间内执行一次
        - 浏览器窗口滚动
    防抖: 
        - 无操作后,执行一次.
        - 搜索框
 */

// 非立即执行
// 节流
function throllte(fn, delay) {
    let timer = null
    return function (e) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.call(this, ...arguments)
                timer = null
            }, delay)
        }
    }
}

// 防抖
function debounce(fn, delay) {
    let timer = null
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(this, ...arguments)
        }, delay)
    }
}

// 立即执行
function debounce(fn, delay, immediate) {
    let timer = null
    let flag = true
    if (immediate) {
        return function () {
            clearTimeout(timer)
            if (flag) {
                fn.call(this, ...arguments)
                flag = false
            }
            timer = setTimeout(() => {
                flag = true
            }, delay)
        }
    }
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(this, ...arguments)
        }, delay)
    }
}
