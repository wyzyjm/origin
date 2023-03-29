const arr = [
    [0, 1],
    [2, 3],
    [4, 5]
]
console.log("arr", arr.flat(1)) // 方式一

// 方式二
function flat(arr) {
    return arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? flat(cur) : cur), [])
}
console.log(flat(arr))

// 方式三
function flat2(arr) {
    return JSON.parse(`[${JSON.stringify(arr).replace(/\[|\]/g, "")}]`)
}
console.log(flat2(arr))
