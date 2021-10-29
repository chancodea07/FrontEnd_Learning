/*
    调用函数的几种方式
    1. test()
    2. obj.test() 对象调用
    3. new test() 构造函数
    4. test.call/apply(obj) 相当于obj.test() 临时让test成为obj的方法进行调用 obj里不一定会有这种方法
 */
var obj = {}
function test() {
    this.prop = 'Hello World'
}
// obj.test() 不能直接调用
test.apply(obj)  //可以让一个函数成为指定任意对象的方法进行调用

console.log(obj)// { prop: 'Hello World' }
