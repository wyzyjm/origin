const arr = [1, 2, 3]

const selfFilter = function (fn, thisArg) {
    return this.reduce((pre, cur, index, arr) => {
        return fn.call(thisArg, cur, index, arr) ? [...pre, cur] : pre
    }, [])
}

Array.prototype.selfFilter = selfFilter
const res = arr.selfFilter(item => item > 2)
console.log('res', res); // [3]