function Person(name, age, sex) {
	this.age = age;
	this.name = name;
	this.sex = sex;
	this.seyHello = function greet() {
		console.log('Hello');
	}
}
var Rahn = new Person('Rahn', 100, '男');
Rahn.seyHello();
console.log(Rahn.sex);
console.log(Rahn);
console.log(Rahn.hasOwnProperty(age))

