// 请编程在没有内置方法的情况下对一个数组和另一个数组进行降序排序。
// 请不要使用JS自带的内部方法
// 例如:input [5,8,23,9,14] => expect output[23,14,9,8,5]。(限时:10分钟)
let arr = [5, 8, 23, 9, 14]
function arrSort(arr) {
    let newArr = arr
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            const stemp = arr[i]
            if (arr[j] > arr[i]) {
                arr[i] = arr[j]
                arr[j] = stemp
            }
        }
    }
    return newArr
}
console.log(arrSort(arr))
