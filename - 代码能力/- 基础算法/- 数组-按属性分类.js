const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];

// result ={
//     objItem[age]:[itemObj1, itemObj2, ...]
//     objItem[age]:[itemObj1, itemObj2, ...]
// }

function group(arr, property) {
    const result = {}
    arr.forEach(cur => {
        const key = cur[property]
        if (!result[key]) (result[key] = [])
        result[key].push(item)
    })
    return result
}
function gruop2(arr, property) {
    return arr.reduce((pre, cur) => {
        const key = cur[property]
        if (!pre[key]) (pre[key] = [])
        pre[key].push(item)
        return pre
    }, {})
}
// function groupByProperty(arr, property) {
//     return arr.reduce((pre, cur) => {
//         const key = cur[property]
//         if (!pre[key]) {
//             pre[key] = []
//         }
//         pre[key].push(cur)
//         return pre
//     }, {})
// }

function groupByProperty(arr, property) {
    return arr.reduce((pre, cur) => {
        const key = cur[property]
        if (!pre[key]) pre[key] = []
        pre[key].push(cur)
        return pre
    }, {})
}
const res = groupByProperty(people, 'name')
console.log('groupByProperty', res);