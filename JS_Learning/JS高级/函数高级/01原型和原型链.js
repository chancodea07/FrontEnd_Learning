/*
    函数的prototype属性
    每个函数都有一个原型属性，它默认指向一个Object空对象（原型对象）
 */
console.log(Date.prototype, typeof Date.prototype)

function fun() {

}

console.log(fun.prototype, typeof fun.prototype)
fun.prototype.test = function () {
    console.log('test()')
}