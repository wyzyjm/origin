# 基础类型

-   number
-   string
-   boolean
-   null
-   undefined
-   元组: []
-   enum: 枚举, 用于定义数值集合
-   any: 不确定的类型, 可以被使用.
-   unknown: 不知道类型. 就不能使用.
-   void
-   never: 通常用来抛错.

## 高级类型

1. 交叉类型: `&` 将多个类型连接起来. 只能是其中一种, 需要 `类型判断`
2. 联合类型: `|` 一个值可以是其中之一.
3. 类型别名： `type`

4. 类型保护 与 区分类型
    - 自定义保护: `a is A`
    - typeof 检测类型

## 泛型

-   使用类型断言中 <T,K U> 的形式, 将类型抽象出来.
