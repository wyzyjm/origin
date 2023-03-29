const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"]

const note = names.reduce((pre, cur, index, names) => {
    if (cur in pre) {
        pre[cur]++
    } else {
        pre[cur] = 1
    }
    return pre
}, {})
console.log("所有元素次数", note)
