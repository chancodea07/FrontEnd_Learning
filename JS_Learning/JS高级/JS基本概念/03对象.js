var p = {
    name: 'Tom',
    age: 12,
    //属性值是函数：方法（一种特殊的属性）
    setAge: function (age) {
        this.age = age;
    },
    setName: function (name) {
        this.name = name;
    }
}
console.log(p.name, p.setName)
/*
    访问对象内部数据
        1. .属性名：编码简单 有时不能用
        2. ['属性名']：编码麻烦 能通用
 */
p.setName('Bob')
p["setAge"](15)
console.log(p, p['age'])
/*
    什么时候必须用第二种访问方式？
        属性名包含特殊字符
        属性名不确定，放到变量中（动态名称）
 */
var p2 = {}
// 1. p对象添加一个属性 content-type : 'text/json' 方式1失效
p['content-type'] = 'text/json'
console.log(p['content-type'])

var propName = 'myAge'
var value = 18
p[propName] = value
console.log(p)  //myAge: 18
