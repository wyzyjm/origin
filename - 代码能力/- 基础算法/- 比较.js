/* 
    比较
        1. JSON.stringify()  null 和 undefined
        2. 
 */

const arr1 = [null, 2, 3]
const arr2 = [null, 2, 3]

// console.log(JSON.stringify(arr1) === JSON.stringify(arr2))

function com(arr1, arr2) {
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        if (arr1.length !== arr2.length) return false
        return arr1.every((item, index) => {
            if (typeof item !== "object" && item !== null && typeof arr2[index] !== "object" && arr2[index] !== null) return item === arr2[index]
        })
    } else {
        return "有错"
    }
}
console.log(com(arr1, arr2))
