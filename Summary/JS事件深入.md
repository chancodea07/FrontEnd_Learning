# JS事件深入

## 注册事件的方式

- 直接注册事件
- 事件监听方式

## 事件的监听

``addEventListener`` 事件监听方式

```javascript
var btn = document.querySelector('button');
btn.addEventListener('click', function () {
    alert("Hello World");
})
btn.addEventListener('mouseover', function () {
    alert("Hello World！");
})
```

1. 里面的事件类型是字符串，需要加引号
2. 同一个元素/同一个事件可以添加多个侦听器（事件处理程序）

## 事件的解绑（删除事件）

### 传统注册事件的解绑方式

```javascript
var divs = document.querySelectorAll('div');
divs[0].onclick = function () {
    alert(11);
    divs[0].onclick = null; // 事件解绑，不再绑定此事件
}
```

### 事件监听的注册和解绑方式

不用匿名函数

```javascript
divs[1].addEventListener('click', fn)//里面的fn不要加括号
function fn() {
    alert(22);
    divs[1].removeEventListener('click', fn);
}
```

## IE浏览器的事件监听

> IE，狗都不用

`attachEvent`和`detachEvent`

```javascript
divs[2].attachEvent('click', fn)//里面的fn不要加括号
function fn() {
    alert(22);
    divs[1].detachEvent('click', fn);
}
```

## DOM事件流

事件流描述的是从页面中接受事件的顺序，事件发生时会在元素节点之间按照**特定的顺序传播**，这个传播过程即DOM的事件流

分成三个阶段：

1. 捕获阶段
2. 当前目标阶段
3. 冒泡阶段

   ![image-20210522150346665]( https://images2015.cnblogs.com/blog/740839/201609/740839-20160910153551644-925968915.jpg)

## 事件对象

```javascript
var div = document.querySelector('div');
div.onclick = function (ev) {

}
```

1. event是一个事件对象，写到我们侦听函数的小括号中，当作形参
2. 事件对象只有有了事件才会存在，他是**系统自动给我们创建的**，不需要我们传递参数
3. 事件对象是我们事件的一系列相关数据的集合，跟事件相关的
4. 事件对象常用e、ev命名
5. 事件对象也有兼容性问题 ie678 通过window.event实现

兼容性写法：`e = e || window.event`

### 事件对象常见的属性和方法

#### e.target 和 this

```html

<div>123</div>
<ul>
    <li>abc</li>
    <li>abc</li>
    <li>abc</li>
</ul>
<script>
    const div = document.querySelector('div');
    div.addEventListener('click', function (e) {
        console.log(e.target);
        console.log(this);
    })
    const ul = document.querySelector('ul');
    ul.addEventListener('click', function (e) {
        console.log(this);
        // 指向函数的调用者 这里ul绑定了事件，调用了相关函数，this指向ul
        console.log(e.target);
        // 指向我们点击的那个对象 点击的是li，那么e指向li
    })

</script>
```

1. e.target 返回的时触发事件的对象（元素）
2. this 返回的是绑定事件的对象（元素），指向函数的调用者

#### 类型和行为阻断

```javascript
var a = document.querySelector('a');
a.addEventListener('click', function (ev) {
    console.log(e.type());
    e.preventDefault(); //阻止点击a中的链接之后跳转的默认行为
})
```

### 阻止DOM中的事件冒泡

`stopPropagation`方法

## 事件委托（代理、委派） (重要)

原理：**不要给每个子节点设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点**

只需要操作一次DOM，提高了程序的性能

```html

<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
</ul>
<script>
    //事件委托：父节点设置监听，利用事件冒泡影响每个子节点
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li');
    ul.addEventListener('click', function (e) {
        for (let i = 0; i < li.length; i++) {
            li[i].style.backgroundColor = '';
        }
        e.target.style.backgroundColor = '#bfa';

    })
</script>
```

理解：点击li之后，事件冒泡到ul，ul注册了点击事件，从而触发相应的函数，对事件变量e进行操作

### 常用鼠标事件简介

| 事件类型  | 说明                                                         |
| --------- | ------------------------------------------------------------ |
| click     | 单击鼠标左键时发生，如果右键也按下则不会发生。当用户的焦点在按钮上并按了 Enter 键时，同样会触发这个事件 |
| dblclick  | 双击鼠标左键时发生，如果右键也按下则不会发生                 |
| mousedown | 单击任意一个鼠标按钮时发生                                   |
| mouseout  | 鼠标指针位于某个元素上且将要移出元素的边界时发生             |
| mouseover | 鼠标指针移出某个元素到另一个元素上时发生                     |
| mouseup   | 松开任意一个鼠标按钮时发生                                   |
| mousemove | 鼠标在某个元素上时持续发生                                   |


- 禁用右键菜单

```javascript
document.addEventListener('contextmenu', function (ev) {
    ev.preventDefault();
})
```

- 禁止选中文字 selectstart

```javascript
document.addEventListener('selectstart', function (ev) {
    ev.preventDefault();
})
```

### 鼠标对象
> event对象代表事件的状态，跟事件相关的一系列信息的集合。现阶段我们主要是用鼠标事件对象 MouseEvent 和键盘事件对象 KeyboardEvent。

```javascript
document.addEventListener('click',function (ev) {
//    获取相对浏览器可视区的X Y坐标
   console.log(ev.clientX);
   console.log(ev.clientY);
//   获取鼠标在页面文档的x和y坐标 常用！
   console.log(ev.pageX);
   console.log(ev.pageY);
})
```
### 常用的键盘事件

- onkeyup 按键松开时触发
- onkeydown 按键被按下时触发
- keypress 按键按下（除了ctrl 左右箭头等特殊功能性按键）

三个事件有执行顺序

> onkeydown - keypress - onkeyup

