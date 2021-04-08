/* 提示信息与控制台输出信息 */
// alert("Hello World"); 弹出提示窗口/*  */
// console.log("Error"); 输出信息
// console.error("This is an error"); 输出错误
// console.warn("This is a warn"); 输出警告
/* 变量的分类:var let const
    var:全局作用域，慎用
    let const 块作用域，let可以重新赋值，const为常量
*/

// const a = 10; const必须事先赋值，否则会报错
// console.log("a =",a);

/* 常见数据类型：字符串、数字、布尔、NULL、Undefined
    typeof+变量名 在console中输出变量类型
*/
// const name = "John";
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof name);
/* 字符串的拼接 */
/* 传统方式，类似于python中的字符串拼接，用+号进行拼接 */
// console.log("My name is " + name + " and I am " + age);
// /* 新方式：模板字符串 ，注意不是用引号，应该用反引号``进行包裹*/
// console.log(`My name is ${name} and I am ${age}`);
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);

/* 字符串的属性和方法 */
// const s = 'Hello World'
// console.log(s.length);
// console.log(s.toLowerCase());
// console.log(s.substring(0,5).toUpperCase());
// const a = 'technology,computers,infomation,code'
// console.log(a.split(','))//分割字符串将其转换为数组

// /* 数组、列表及其方法*/
// const numbers = new Array(1, 2, 3, 4, 5);
// const fruits = ["Apples", "Oranges", "Pears", 10];
// //类似于Python中列表的存放逻辑：兼容多个数据类型
// console.log(numbers);
// console.log(fruits);
// console.log(fruits[1]);
// //const属性下的列表或数组可以实现添加值，但是不可以修改值
// fruits[4] = "Grapes";//下标法
// console.log(fruits);
// fruits.push('Watermelon')//push方法
// console.log(fruits);
// fruits.unshift('Strawberry')
// fruits.pop();
// console.log(fruits);
// console.log(Array.isArray(fruits));//判断是否为数组（列表）
// console.log(Array.isArray('fruits'));//判断是否为数组（列表）
// console.log(fruits.indexOf("Strawberry"));//查找列表中指定元素的索引值

// /* 对象 类似于Python中的字典 */
// const Person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	age: 30,
// 	hobbies: ["music", "movies", "sports"],
// 	address: {
// 		street: "50 main st",
// 		city: "Bostan",
// 		state: "MA",
// 	}, //嵌套对象
// };
// // alert(Person);
// console.log(Person.firstName, Person.lastName);
// console.log(Person.address.city);
// console.log(Person.hobbies[0]);

// /* 从对象中解构，也就是从Person中取出了firstName 和 lastName 作为实际的变量 */
// const {
// 	firstName,
// 	lastName,
// 	address: { city },
// } = Person;
// console.log(firstName);
// console.log(city);

// /* 添加新属性 */
// Person.email = 'John@gmail.com'
// console.log(Person.email);

/*数组对象 类似于JSON中的语法，JS中没有双引号 */
// const toDoList = [
// 	{
// 		id: 1,
// 		text: "Take out trash",
// 		isCompleted: true,
// 	},
// 	{
// 		id: 2,
// 		text: "Meeting with my boss",
// 		isCompleted: true,
// 	},
// 	{
// 		id: 3,
// 		text: "Dentist Appointment",
// 		isCompleted: false,
// 	},
// ];
// console.log(toDoList);//获取全部
// console.log(toDoList[1].text);//获取某一个元素

// const todoJson = JSON.stringify(toDoList);
// console.log(todoJson);

// /* 将数组对象转换为JSON数据格式 */

/* 循环  */
// for (let i = 0; i <= 10; i++) {
// 	console.log(`For Loop Number ${i}`);
// }
// let i = 0;
// while (i <= 10) {
// 	console.log(`While Loop Number ${i}`);
// 	i++;
// }

/* 循环遍历 */
// for(i=0;i<toDoList.length;i++){
//     console.log(toDoList[i].text);
// }

//类似于python中的for循环
// for (let todo of toDoList) {
// 	console.log(todo.id);
// 	console.log(todo.text);
// }

/* 迭代器 */
//forEach,map,filter

/* forEach 该方法接收一个函数作为参数，对数组中的每个元素使用该函数*/
// toDoList.forEach(function (todo) {
// 	console.log(todo.text);
// });

/* 有两个迭代器方法可以产生新数组：map()和filter()。map()和forEach()有点像，对数组中的每个元素使用某个函数，两者区别在于map()返回一个新数组，该数组是对原有元素应用某个函数得到的结果 */
/* map */
// const todoText = toDoList.map(function(todo){
//     return todo.text;
// })
// console.log(todoText);

/* filter 当对数组中的所有元素应用该函数，结果均为true时，该方法并不返回true，而是返回一个新数组，该数组包含应用该函数后结果为true的元素 */
// const todoCompleted = toDoList
// 	.filter(function (todo) {
// 		return todo.isCompleted == true;
// 	})
// 	.map(function (todo) {
// 		return todo.text;
// 	});
// console.log(todoCompleted);

/* 判断语句 */
/* == 不进行类型检查
   === 进行类型检查
   语句形式、复合判断语句等和C语言是相同的，同样符合C语言的三目运算符,switch等用法
*/
// const x = '1';
// if(x == 10)
// {
// 	console.log(`x is ${x}`);
// }else{
// 	console.log(`x isn't ${x}`);
// }
// const x = 19;
// const color = x > 10 ? "red" : "blue";
// console.log(color);

// switch (color) {
// 	case 'red':
// 		console.log("color is red");
// 		break;
// 	case 'blue':
// 		console.log("color is blue");
// 	default:
// 		console.log("color is neither red nor blue");
// 		break;
// }

/* 函数 */
// function addNums(num1 = 1, num2 = 1) {
// 	// console.log(num1 + num2);
// 	return num1 + num2;
// }
// console.log(addNums(5, 5));
/* 函数的简写 */
// const addNum = (num1 = 1, num2 = 1) => console.log(num1 + num2);
// addNum();
// const addNums = (num1, num2) => num1 + num2;
// console.log(addNums(5, 5));
/* 这样的写法直接实现了值的返回 */


/* OOP */
/* 构造对象 嵌套构造 */
// function Person(firstName, lastName, dateOfBirth) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.dateOfBirth = new Date(dateOfBirth); //将dateofbirth构造为一个内置的对象
// 	// this.getBirthYear = function () {
// 	// 	 return this.dateOfBirth.getFullYear();
// 	// };
// 	// this.getFullName = function () {
// 	// 	// return this.firstName + " " + this.lastName;
// 	// 	return `${this.firstName} ${this.lastName}`
// 	// };
// }
// /*
// /* 函数转移到原型中：使得对象中不含有函数的部分，把对象中定义的函数转移到了外部，相当于C++中的继承*/
// Person.prototype.getBirthYear = function () {
// 	return this.dateOfBirth.getFullYear();
// };
// Person.prototype.getFullName = function () {
// 	return `${this.firstName} ${this.lastName}`;
// };
// /* 原型：属性追加 */
// Person.prototype.sex = "Male";
/* 实例化对象 */
// const person1 = new Person("John", "Doe", "1980-02-03");
// const person2 = new Person("Mary", "Smith", "2000-02-03");
// console.log(person1.dateOfBirth.getDate());
// console.log(person2.dateOfBirth.getFullYear());
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
// console.log(person2.getFullName());
// console.log(person1.sex);

/* 类 和C++中的类是类似的，这样看起来更为层次化 类的操作和实例化实现都是一样的，这样的书写方式实现效果和上面的构造对象是一样的，这个方式更容易些*/
// class Person {
// 	constructor(firstName, lastName, dateOfBirth) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.dateOfBirth = new Date(dateOfBirth);
// 	}
// 	getBirthYear(){
// 		return this.dateOfBirth.getFullYear();
// 	}
// 	getFullName(){
// 		return `${this.firstName} ${this.lastName}`;
// 	}
// }
// const person1 = new Person("John", "Doe", "1980-02-03");
// const person2 = new Person("Mary", "Smith", "2000-02-03");

/* document */
