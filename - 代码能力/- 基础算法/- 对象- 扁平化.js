/* 
对象扁平化
 */
const obj = {
    a: {
        b: 1,
        c: 2,
        d: {
            e: 3,
            2: 200
        }
    },
    b: [1, 2, { a: 3, b: 4 }],
    c: 1,
    1: 100
}

function flattenObj(obj) {
    let newObj = {}
    const loop = (item, attr) => {
        if (Array.isArray(item)) {
            // 数组
            item.forEach((i, index) => {
                loop(i, `[${index}]`)
            })
        } else if (item instanceof Object) {
            // 对象
            Object.entries(item).forEach((a, b) => {
                const key = isNaN(a[0]) ? `.${a[0]}` : `[${a[0]}]`
                loop(a[1], !attr ? a[0] : attr + key)
            })
        } else {
            newObj[attr] = item
        }
    }
    loop(obj, "")
    return newObj
}
// console.log("flattenObj(obj)", flattenObj(obj))

// 判断对象
// console.log(null instanceof Object) // false
