/*
    关于引用变量赋值的问题：
        n个引用变量指向了同一个对象，通过一个变量修改对象的内部数据，其他所有变量看到的是修改之后的数据
        2个引用变量指向同一个对象，让其中一个引用变量指向另一个对象，另一个引用变量依然指向前一个对象
 */

var obj = {name: 'Tom'}
var obj2 = obj
obj2.age = 12
console.log(obj.age)

function fn1(obj) {
    //传入了obj的引用
    obj.name = 'A'
}

fn1(obj)
console.log(obj2.name)

var a = {age: 12}
var b = a
a.age = 13
a = {name: 'Bob'}//新的地址
console.log(a)//没有age
console.log(b)//没有name
a = {age: 13, name: 'Bob'}

function fn2(obj) {
    obj = {age: 15}
    //obj原本指向了a的内存空间，函数中使得obj指向了新的空间
    //这里的obj是局部变量，函数执行完毕后会被释放，全程a没有发生变化
}

fn2(a)//值传递，这里是a的内容（这里指的是地址值）赋给函数中的obj
console.log(a)//{ age: 13, name: 'Bob' }
