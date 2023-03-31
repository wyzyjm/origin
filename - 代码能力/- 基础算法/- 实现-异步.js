const list = [1, 2, 3]
const square = num => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num * num)
        }, 1000)
    })
}

// 执行结果 1s后 149
// list.forEach(async item => {
//     const res = await square(item)
//     console.log("res", res)
// })

// 按个执行
let index = 0
const run = async () => {
    if (index >= list.length) return
    const res = await square(list[index++])
    console.log("res", index, res)
    run()
}
run()
