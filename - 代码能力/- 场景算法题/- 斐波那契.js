// 请使用递归算法计算斐波那契数列。
// Fibonacci是一列的规则如下:1、1、2、3、5、8、13、21、34…(限定时间:10min)
// 写一个函数通过索引获取值

function getNum(n) {
    if (n == 0 || n == 1) return 1
    return getNum(n - 1) + getNum(n - 2)
}
console.log(getNum(5))

// 指定长度的 数列
function getNumArr(n) {
    let result = []
    for (let i = 0; i < n; i++) {
        result.push(getNum(i))
    }
    return result
}
console.log(getNumArr(5))
