/*
    在js调用函数时传递变量参数时，是值传递还是引用传递？
    理解1：都是值（基本/地址）传递
    理解2：可能是值传递，也可能是引用传递（地址值）
 */
var a = 3

function fn(a) {
    a = a + 1
}

fn(a)
console.log(a)// 3
function fn2(obj) {
    console.log(obj.name)
}

var obj = {name: 'Bob'}
fn2(obj)
/*
    JS如何管理内存?
1. 内存生命周期
    * 分配小内存空间，得到使用权
    * 存储数据，可以反复进行操作
    * 释放小内存空间
2. 释放内存
    * 局部变量：函数执行完自动释放
    * 对象：成为垃圾对象 => 由垃圾回收器回收
 */
console.log('------------------')
var a = 3
var obj = {}
obj = null//obj空间没有被释放
console.log(a, obj)
function f() {
    var b = 4
}
fn()//b自动释放，b所指向的对象是在后面的某个时刻由垃圾回收器回收（时间间隔短）

