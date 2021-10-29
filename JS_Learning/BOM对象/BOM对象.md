# 操作BOM对象

BOM：浏览器对象模型

## 浏览器介绍

JS和浏览器的关系：JS的诞生就是为了能够让他在浏览器中运行

### 浏览器内核分类

- IE 6-11
- Chrome
- Safari
- Firefox
- Opera

### window
window代表浏览器窗口信息
```javascript
window.alert(1);
window.innerHeight;
window.outerHeight;
window.outerWidth;
```
### Navigator
Navigator 封装了浏览器的信息
```javascript
navigator.appVersion;
navigator.platform;
```
大多数时候，我们不会使用`navigator`对象，因为会被人为修改

不建议使用这些属性来判断和编写代码

### screen
```javascript
screen.width;
screen.height
```
### location
location 代表当前的url信息

- host: 域名信息
- href：url信息
- protocol：网络协议
- reload 刷新网页
```javascript
location.reload()//刷新网页
location.assign('https://www.github.com')//实现类似的重定向操作
```

### document （最主要 DOM操作） 
代表当前的页面信息 HTML DOM树
```javascript
document.title//页面标题
```
获取具体的文档树节点（DOM元素、节点操作）

document可以获取cookie信息
```javascript
document.cookie
```

### history
> 代表浏览器的历史记录
```javascript
history.back()//浏览器后退
history.forward()//浏览器前进
```
