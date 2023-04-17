/* 
  基本数据类型:
    Number
    String
    Null
    Undefined
    Boolean
    Symbol: 独一无二的值. 全局变量冲突的问题
    BigInt: 数字类型:整数,用来表示比较大的值.

    Object


  问题:   Null 和 Undefined 的区别 ?
      1. 都是基本数据类型
      2. undefined是未定义, 一般声明但未赋值时, 会返回undefined
         null是空对象, 主要用于赋值给一些可能会返回对象的变量,用作初始化. 
      3. typeof 检测null时,会返回一个object,这是一个历史遗留问题
         使用==判断时,两者相同, ===判断为false.
 */
//

/* 
    1. 基本类型检测: typeof obj =  number | string | undefined | object
    2. 复杂数据类型: a instanceof Array
    3. Object.prototype.toString.call(obj) === '[object object|function| Date| RegEx]'
  */
console.log(typeof undefined)

// instanceof : 判断实例原型链上 是否有构造函数的 prototype.
console.log([] instanceof Array)
console.log("[]" instanceof String)

// Object.prototype.toString.call(obj) [object object]
console.log(Object.prototype.toString.call(123))

// 判断空对象
console.log("检测空对象", JSON.stringify({}) === "{}")
console.log("检测空对象", Object.keys({}).length === 0)
