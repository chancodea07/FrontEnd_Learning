/*
    this是什么？
        所有函数的内部都有一个变量this，
        它的值是调用函数的当前对象，
        任何函数本质上都是通过某个对象来调用的，没有指定就是全局对象（global、window）
    如何确定this的值？
 */
function Person(color) {
    console.log(this)
    this.color = color;
    this.getColor = function () {
        console.log(this)
        return this.color;
    };
    this.setColor = function (color) {
        console.log(this);
        this.color = color;
    }
}

Person('red');              //this: window全局对象（node环境中是global）
var p = new Person('blue'); //Person {}
p.getColor();                    //Person { color: 'blue', getColor: [Function], setColor: [Function] }

var obj = {}
p.setColor.call(obj,"black")
function fn1() {
    function fn2() {
        console.log(this)
    }
    fn2()
}
console.log('________________________________________________________________')
fn1()   //this是window对象 node中是global对象
console.log('________________________________________________________________')
var test = p.setColor
test()                           //this: window全局对象（node环境中是global）