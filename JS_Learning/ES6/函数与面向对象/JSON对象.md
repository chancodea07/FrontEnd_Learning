# JSON对象

## JSON是什么

早期所有的数据传输习惯于XML格式进行数据传输

JSON是一种轻量级的数据交换格式，简洁而且层次结构清晰，易于阅读和编写，同时也易于机器解析和生成，有效提升网络传输效率

在JS中，一切皆为对象，任何JS支持的类型都可以用JSON来表示

## JSON的格式

- 对象都用{}
- 数组都用[]
- 所有的键值对都用`key:value`

## JSON和JS对象的转化

```javascript
const user = {
    name: 'John',
    age: 20,
    sex: 'male'
}
//对象转化为json字符串
const json_user = JSON.stringify(user);
//json字符串转化为对象 参数为json字符串
const obj = JSON.parse('{"name": "John", "age": 3, "sex": "male"}');
```
**注意区分JSON字符串和JS对象的区别！**
