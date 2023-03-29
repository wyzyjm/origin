const strArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Sunday", "Monday"]

// includes indexOf

console.log(Array.from(new Set(strArray))) // 方式一 [...new Set(strArray)]

function duplicate(arr) {
    return arr.reduce((pre, cur) => (pre.includes(cur) ? pre : pre.concat(cur)), [])
}
console.log(duplicate(strArray)) // 方式二

function duplicate2(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}

console.log("duplicate2", duplicate2(strArray)) // 方式三
