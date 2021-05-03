# Javascript 其二

> 第二部分提要
>
> - 数据类型的进一步深入
>   - 类Class介绍
>   - 部分数据类型的常用属性与方法
> - **面向对象编程**（待补充）

## 数据类型进阶

### 对象

#### 概念

在 JavaScript 中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象，例如字符串、数值、数组、函数等。

对象是由属性和方法组成的。

- 属性：事物的**特征，**在对象中用**属性**来表示（常用名词）

- 方法：事物的**行为，**在对象中用**方法**来表示（常用动词）

#### 变量、属性、函数与方法

l变量：单独声明赋值，单独存在

l属性：对象里面的变量称为属性，不需要声明，用来描述该对象的特征

l函数：单独存在的，通过“函数名()”的方式就可以调用

l方法：对象里面的函数称为方法，方法不需要声明，使用“对象.方法名()”的方式就可以调用，方法用来描述该对象的行为和功能。

#### 创建对象的方式

- 字面量（类似于Python中的Dictionary）

```js
var star = {
    name : 'pink',
    age : 18,
    sex : '男',
    sayHi : function(){
        alert('大家好啊~');
    }
};
```

- new一个

```js
var andy = new Obect();
andy.name = 'pink';
andy.age = 18;
andy.sex = '男';
andy.sayHi = function(){
    alert('大家好啊~');
}
```

- 构造函数（类比C++）

**构造函数** ：是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与 new 运算符一起使用。我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。

在 js 中，使用构造函数要时要注意以下两点：

l构造函数用于创建某一类对象，其首字母要大写

l构造函数要和 new 一起使用才有意义

```js
function Person(name, age, sex) {
     this.name = name;
     this.age = age;
     this.sex = sex;
     this.sayHi = function() {
      alert('我的名字叫：' + this.name + '，年龄：' + this.age + '，性别：' + this.sex);
    }
}//构造类
var bigbai = new Person('大白', 100, '男');//实例化对象
var smallbai = new Person('小白', 21, '男');
console.log(bigbai.name);
console.log(smallbai.name);
```

**\1.  构造函数约定首字母大写。**

\2.  函数内的属性和方法前面需要添加 this ，表示当前对象的属性和方法。

\3.  构造函数中不需要 return 返回结果。

\4.  当我们创建对象的时候，必须用 new 来调用构造函数。

#### 对象的调用

对象里面的属性调用 : `对象.属性名`

对象里面属性的另一种调用方式 : `对象[‘属性名’]`，**注意方括号里面的属性必须加引号**

对象里面的方法调用：`对象.方法名() `，**注意这个方法名字后面一定加括号** 

#### 对象的几个常用法

- 对象属性可以被赋值
- 使用一个不存在的对象属性不会报错
- 动态可删减属性
  - 亦即可以随时增添新属性，删除旧有属性（`delete Object.attribute_value`）

- 判断属性是否在对象中 `attr in Object`，注意属性都是字符串的形式！
  - 这里也包括了某个类的对象对其父类属性的继承

```js
'age' in people
->true
```

- 判断一个属性是否是这个对象自身所拥有的

```js
console.log(people.hasOwnProperty('age'));
```

- 对象的遍历

for...in 语句用于对数组或者对象的属性进行循环操作。

其语法如下：

```js
for (var k in obj) {
    console.log(k);      // 这里的 k 是属性名
    console.log(obj[k]); // 这里的 obj[k] 是属性值
}
```

### 严格检查模式`strict`

在ES6中，**建议局部变量都用**`let`

在代码中可以在第一行加入`use strict`语句，严格检查

### 数据类型：字符串

- 正常字符串我们使用单引号或者双引号包裹
- 注意转义字符的使用

```
\'
\n
\t
\u####   Unicode字符
\x41	 ASCII字符
```

- ES6**支持多行字符串编写**

```js
var msg = 'hello' + 'world'
var msg_ = `Hello World!
Hello
World
Hello World
`
```

- **模板字符串**

```js
let name = "Rahn"
let age = 3;
let msg = `你好，${name}`
```

- 字符串长度
- **字符串长度不可变**

```js
str.length
```

- 字符串的大小写转换方法

```js
var student = 'student';
console.log(student.toUpperCase());
console.log(student.toLowerCase());
```

- 字符串检索

```js
console.log(student.indexOf('t'));
```

- **字符串截取**，很重要！

```js
console.log(student.substring(1,3));
```

**左闭右开区间**

输出`tu`

### 数据类型：数组

Array可以包含任意的数据类型

- 长度属性
  - 长度是可变的，给arr.length赋值，数组大小发生变化，赋值过小，元素丢失

```js
var arr = [1,2,3,4,5];
arr.length = 10;
console.log(arr[8])
```

`undefined`

- 检索方法

```
arr.indexOf(2)
```

- 截取方法，返回一个新数组，类似于String中的`substring`

```js
console.log(arr.slice(2,4));
```

`[3,4]`

- `push()`，`pop()`**方法**
  - push：压新的数据到尾部
  - pop：弹出尾部的元素

- `unshift()`，`shift()`**方法**
  - unshift：压入新的数据到头部
  - shift：弹出头部的元素

- 排序`sort()`

- 元素反转`reverse()`，也即使得数组倒序排列

- `concat()`数组**拼接**，本身并不修改数组，只是返回一个新的数组
- 连接符join
  - 打印拼接数组，使用特定的字符串进行连接
- 多维数组

