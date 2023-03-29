const arr = [1, 2, 3]

// const selfMap1 = function (fn, context) {
//     console.log('context', context);
//     let arr = Array.prototype.slice.call(this)

//     let newArr = Array()
//     for (let i = 0; i < arr.length; i++) {
//         if (!arr.hasOwnProperty(i)) continue;
//         newArr[i] = fn.call(context, arr[i], i, this)
//     }

//     return newArr
// }

const selfMap = function (callBack, thisArg) {
    return this.reduce((pre, cur, index, arr) => {
        return [...pre, callBack.call(thisArg, cur, index, arr)]
    }, [])
}
Array.prototype.selfMap = selfMap

const res = arr.selfMap(item => item + 1)
console.log("res", res)
