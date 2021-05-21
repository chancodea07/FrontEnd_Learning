# Javascript 其二

> 第二部分提要
>
> - 函数补充
>  - ES6中的箭头函数简介
> - 数据类型的进一步深入
>   - 类Class介绍
>   - 部分数据类型的常用属性与方法
> - **面向对象编程**（待补充）

## 函数相关补充

- 函数的arguments

当我们**不确定有多少个参数传递的时候**，可以用 arguments 来获取。在 JavaScript 中，arguments 实际上它是当前函数的一个内置对象。所有函数都内置了一个 arguments 对象，arguments 对象中存储了传递的所有实参。

arguments**展示形式是一个伪数组**，因此可以进行遍历。伪数组具有以下特点：

 具有 length 属性

 按索引方式储存数据

 不具有数组的 push , pop 等方法

```js
function maxValue() {
var max = arguments[0];
for (var i = 0; i < arguments.length; i++) {
if (max < arguments[i]) {
	max = arguments[i];
}
}
return max;
}
console.log(maxValue(2, 4, 5, 9));
console.log(maxValue(12, 4, 9));
```

这里实现了求任意个数的最大值

## 数据类型进阶

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

- **模板字符串**（重要）

```js
let name = "Rahn"
let age = 3;
let msg = `你好，${name}`
```

- 字符串长度
- **字符串不可变**

```js
str.length
```

- 字符串的大小写转换方法

```js
var student = 'student';
console.log(student.toUpperCase());
console.log(student.toLowerCase());
```

- 字符串检索`indexOf()`，根据字符返回位置
  - 找不到则返回-1

```js
console.log(student.indexOf('t',[2]));//2表示从第2+1=3个位置开始查找（即从索引值为2的位置开始查找）
```

举例：查找字符，将符合要求的字符索引和总数存入一个新数组中

```js
let str = "abaoefoayozaopao";
let pos = 0, cnt = 0;
let strOf_a = [];
while (pos <= str.length) {
	pos = str.indexOf("a", pos);
	if (pos == -1) {
		break;
	}
	strOf_a.push(pos);
	cnt++;
	pos++;
}
strOf_a.push(cnt);
console.log(strOf_a);
```

- **根据位置返回字符**`charAt(index)`

```js
//charAt可以遍历字符
let str = "abcdefg"
for (let i=0; i < str.length; i++) {
  console.log(str.charAt(i));
}
//charCodeAt(index) 返回相应索引号的字符ASCII值 目的：判断用户按下了哪个键
console.log(str.charCodeAt(0));
//str[index] H5新增
console.log(str[0]);
```

> **案例：统计字符串中出现次数最多的字符和次数（重要）**
>
> 算法：**利用charAt()遍历字符串，把每个字符串都存储给对象，如果对象没有该属性，则为1，如果存在则加一，遍历对象即可得到最大值和字符**

```js
let str = "abcoefoxyozzoppeeade";
let obj = {

};
for (var i = 0; i < str.length; i++)
{
  var chars = str.charAt(i);
  if (obj[chars]) {
    obj[chars]++;//如果有，属性值++，也就是统计次数
  }//判断对象是否有名为chars的属性，得到的是属性值
  else {
    obj[chars] = 1;//赋一个新的字符属性为1
  }
}
console.log(obj);
//遍历对象
let max = 0;
for (const key in obj) {
  //k 得到的是属性名
  //obj[k]得到的是属性值
  if (obj[key]>max) {
    max = obj[key];
    ch = key;
  }
}
console.log("最多的字符是："+ch+"，出现次数为"+max);
```

- **字符串截取**，很重要！

```js
console.log(student.substring(1,3));
```

**左闭右开区间**

输出`tu`

- 字符串转换为数组`split('分隔符')`

```js
var str = 'red,pink,blue';
console.log(str2.split(','))
```

- 字符串替换`replace('被替换','替换')`

```js
let str = "abcoefoxyozzoppeeade";//o全部为*
while (str.indexOf("o") !== -1) {
	str = str.replace("o", "*");
}
console.log(str);
```

> join：将数组转换为字符串

- 如何创建string对象

```js
var s1 = "string";
var s2 = new String("abc")//string是一个内置的类，可以直接使用，string的父类是object
```

无论string还是String，他们的属性和函数都是一样的

修改字符串后，原来的字符串不变，会新开辟一个内存空间，**存修改后的字符串**

字符串的所有方法都不会修改字符串本身，操作完成会返回一个新的字符串

### 数据类型：数组

- 创建新数组New Array()

```js
var array0 = new Array(2);//表示数组的长度为2，里面有两个空的数组元素 
var arr1 = new Array(2,3);//表示里面有两个数组元素2和3
```

- 检测是否为数组：

  - `instanceof`运算符
  
  - ```js
    var arr = [];
    var obj = {};
    console.log(arr instanceof Array);
    console.log(obj instanceof Array);
    // 返回true false
    ```
  
    - Array.isArray()方法，优先于instanceof
  
    - ```js
      console.log(Array.isarray(arr))
      ```

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
  - push：压新的数据到尾部，可以传入多个数据，返回结果是新数组的长度，原数组也会发生变化
  - pop：弹出尾部的单个元素，返回它删除的元素
- `unshift()`，`shift()`**方法**
  - unshift：压入新的数据到头部，可以传入多个数据
  - shift：弹出头部的元素，**返回的是第一个元素的值**
- 排序`sort()`
- 元素反转`reverse()`，也即使得数组倒序排列
- `concat()`数组**拼接**，本身并不修改数组，只是返回一个新的数组
- 连接符join
  - 打印拼接数组，使用特定的字符串进行连接
- 多维数组



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

- **构造函数（类比C++）**

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

for...in **语句用于对数组或者对象的属性进行循环操作**。

其语法如下：

```js
for (var k in obj) {
    console.log(k);      // 这里的 k 是属性名
    console.log(obj[k]); // 这里的 obj[k] 是属性值
}
```

### 内置对象举例

> JS对象分为三种
>
> - 自定义对象
> - 内置对象
> - 浏览器对象

#### Math对象

Math数学对象不是一个构造函数，所以不需要new进行调用，直接使用里面的属性和方法即可

```js
Math.PI // 圆周率
Math.floor() // 向下取整
Math.ceil() // 向上取整
Math.round() // 四舍五入版 就近取整 注意 -3.5 结果是 -3
Math.abs() // 绝对值
Math.max()/Math.min() // 求最大和最小值

console.log(Max.max(1,2,5,8,3)); // 8
```

其他的属性和方法可以查MDN的文档

#### Data对象

> Data对象和Math对象不同，Data对象属于一个构造函数，所以需要实例化之后才可以使用

Data实例常用于处理日期和时间

具体可以参考文档

##### 基本操作案例：输出格式化的日期

```js
let now = new Date();

let time_hour = now.getHours();
let time_minute = now.getMinutes();
let time_second = now.getSeconds();
if (time_hour < 10) {
	time_hour = "0" + time_hour;
}
if (time_minute < 10) {
	time_minute = "0" + time_minute;
}
if (time_second < 10) {
	time_second = "0" + time_second;
}
let time = time_hour + ":" + time_minute + ":" + time_second;
console.log(date + " " + "星期" + weekday + " " + time);
```

```
2021年5月4日 星期二 21:08:23
```

##### 毫秒数

经常利用总的毫秒数来计算时间，因为它更精确

`valueOf() getTime()`

```js
let date = new Date;
console.log(date.getTime());
console.log(date.valueOf());
//距离1970年1月1日的时间，总的毫秒数

let date1 = +new Date();//返回总的毫秒数，最常用的写法
console.log(date1);

// 3. HTML5中提供的方法
var now = Date.now();
console.log(now);
1620133883268
```

## 数据类型总结

### 简单类型与复杂类型内存

简单类型又叫做基本数据类型或者值类型，复杂类型又叫做引用类型。

 值类型：简单数据类型/基本数据类型，在存储时变量中存储的是值本身，因此叫做值类型

> string ，number，boolean，undefined，null

  引用类型：复杂数据类型，在存储时变量中存储的仅仅是地址（引用），因此叫做引用数据类型
 通过 new 关键字创建的对象（系统对象、自定义对象），如 Object、Array、Date等

堆栈空间分配区别：

1、栈（操作系统）：由操作系统自动分配释放存放函数的参数值、局部变量的值等。其操作方式类似于数据结构中的栈；

> **简单数据类型存放到栈里面**，存放的是数值

2、堆（操作系统）：存储复杂类型(对象)，一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收。

> **复杂数据类型存放到堆里面**

```js
var arr = [1,2,3];
```

复杂数据类型，在栈中存放地址，十六进制表示，然后这个地址指向堆中的数据

<img src="JS (2).assets/image-20210509220339382.png" alt="image-20210509220339382" style="zoom:67%;" />

### 简单类型与复杂类型的参数传递

函数的形参也可以看做是一个变量，当我们把一个值类型变量作为参数传给函数的形参时，其实是把变量在栈空间里的值复制了一份给形参，那么在方法内部对形参做任何修改，都不会影响到的外部变量。

> 这个和C/C++中的函数形参实参传递类似

```js
function fn(a) {
a++;
console.log(a);
}
var x = 10;
fn(x);
console.log(x)；
```

函数的形参也可以看做是一个变量，当我们把引用类型变量传给形参时，其实是把变量在栈空间里保存的堆地址复制给了形参，形参和实参其实保存的是同一个堆地址，所以操作的是同一个对象。

> 类似于C/C++数组指针



