const arr = [1, 2, 3]
const res = arr.map(item => {
    if (item === 2) {
        Promise.reject("error")
    }
    return item
})
console.log("res", res)
