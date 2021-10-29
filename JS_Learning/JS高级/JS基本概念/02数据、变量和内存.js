//1. 什么是数据
/*
    存储在内存中的，代表特定信息二进制列
    特点：可传递、可运算性
*/
//2. 什么是内存
/*
    内存分类：
    堆：存放地址（对象本身）
    栈：存放基本数据类型的数据 全局、局部变量 （标识这个对象的变量）
*/
//3. 什么是变量
var age = 18;
var object = {name: "Tom", age: age};
//对于object：存储的是地址
var a = object; //a获得了变量的地址值，指向了同一块内存空间
console.log(a.name);
a.name = "John"
console.log(object.name);//John
