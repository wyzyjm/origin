/* 
    1. typeof obj =  number | string | undefined | object
    2. a instanceof Array
    3. Object.prototype.toString.call(obj) === '[object object|function| Date| RegEx]'
  */
console.log(typeof undefined)

// instanceof : 判断实例原型链上 是否有Array, 同一个window对象下才准确.
console.log([] instanceof Array)

// Object.prototype.toString.call(obj) [object object]
console.log(Object.prototype.toString.call(123))
