function Person(name, age) {
    // 构造函数
    this.name = name;
    this.age = age;
}

var p = new Person('John', '18');// 根据类型创建的实例对象
console.log(p)
/*
* 1. undefined和null的区别
*   undefined：代表定义之后未赋值
*   null：代表定义之后定义并赋值，值为null
*/
var a;
console.log(a);//undefined
a = null;
console.log(a);//null

var b = null; //初始赋值null，表明将要赋值为对象（规范）
b = ['John', 'John Smith', '18'];
//最后
b = null;// 让b指向的对象成为垃圾对象（被垃圾回收器回收）
/*
 2. 什么时候给变量赋值为null？
    初始赋值：表明变量要赋值为对象
    最后结束赋值：表明让对象成为垃圾对象，让垃圾回收器回收
 3. 严格区别变量类型和数据类型
    数据的类型：
        基本类型
        对象类型
    变量的类型
        基本类型：保存的就是基本类型中的值
        引用类型：保存的是地址值
*/
var c = function () {
    return 'a + b'
}
console.log(typeof c)//function
console.log(c())