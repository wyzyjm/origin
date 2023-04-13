const obj = {
    name: "小明",
    age: 18,
    say: function () {
        console.log("say")
    },
    date: new Date(),
    reg: /\./,
    no: null,
    undefined: undefined,
    hobby: ["篮球", "足球"]
}
function DeepClone(obj) {
    if (typeof obj !== "object" || obj === null) return obj
    if (obj instanceof Date) return new Date(obj)
    if (obj instanceof RegExp) return new RegExp(obj)
    let newObj = {}
    if (Array.isArray(obj)) {
        newObj = []
        for (const item of obj) {
            newObj.push(DeepClone(item))
        }
    } else {
        for (const item in obj) {
            newObj[item] = DeepClone(obj[item])
        }
    }
    return newObj
}
const newObj = DeepClone(obj)
newObj.undefined = "123"
newObj.hobby.push("123")

console.log(obj, newObj)
