var obj = {
    name: "小明",
    hoby: ["篮球", "小花", ["吃饭", "喝酒", "KTV"]],
    date: new Date(),
    say: function () {
        console.log("123")
    }
}

// var newObj = Object.assign({}, obj) // 方式一
let newObj = JSON.parse(JSON.stringify(obj)) // 方式二 只能拷贝json类型的具体数据, 不能拷贝函数,日期,正则等
// function copy(obj) {
//     // 方式二
//     var obj2 = {}
//     for (var i in obj) {
//         if (obj.hasOwnProperty(i)) {
//             obj2[i] = obj[i]
//         }
//     }
//     return obj2
// }
// var newObj = copy(obj)

/******************执行******************/
newObj.name = "小花"
newObj.hoby[0] = "哈哈哈"
console.log(obj, newObj)
