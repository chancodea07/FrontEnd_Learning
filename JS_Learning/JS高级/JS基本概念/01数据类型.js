/*
1. 分类：
    1. 基本值的类型
    2. 对象（引用类型）
        Object：任意对象
        Function：一种特别的对象（可以执行）
        Array：一种特别的对象（数值下标 内部数据有序）
2. 判断
    1. typeof
        可以判断：undefined 数值 字符串 布尔值 function
        不能判断：null与object object与array
    2. instanceof
    3. ===
        可以判断：undefined null两种
*/

// 1. 基本数据
// typeof 返回数据类型的字符串表达
var a;
console.log(a, typeof a, a === undefined); //undefined 'undefined'(字符串的形式) true
a = 3;
console.log(typeof a === 'number');
a = 'Hello World';
console.log(typeof a === 'string');
console.log(typeof a === 'String');//false
a = null;
console.log(typeof a === 'object', a === null);//true true

// 2. 对象 数据无序
var b1 = {
    b2: [1, 'abc', console.log],
    b3: function (a) {
        console.log('b3', a);
        return function (b) {
            return 'Inner' + b;
        }
    },
}
console.log(typeof b1.b2, '-------');// object，不是array！注意这个特例
console.log(typeof null, '-------');// object，不是array！
console.log(typeof b1.b3, '-------');// function
console.log(b1 instanceof Object, b1.b2 instanceof Array, b1.b3 instanceof Function);// true true true
console.log(b1 instanceof Object, b1.b2 instanceof Object, b1.b3 instanceof Object);// true true true
console.log(typeof b1.b3 === 'function');//true
console.log(b1.b2[2] instanceof Function)//true
b1.b2[2](4);
b1.b3(4)
console.log(b1.b3(1)(2))