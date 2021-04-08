// console.log(window);//window对象，包含了大多数方法
//浏览器的全局对象是window，所有全局变量实际上是window的成员
// window.alert(1);
/* 单元素选择器  返回元素 */
// console.log(document.getElementById("my-form"));
//通过标签抓取HTML中的元素
// const form = document.getElementById("my-form");
//存放到变量中
// console.log(document.querySelector('.container'));
//也是一种抓取方式，推荐使用这类方法

/* 多元素选择器，返回列表 */
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));


// const items = document.querySelectorAll('.item');
// items.forEach((item)=>console.log(item))//遍历


/* JS 网页逻辑 选中元素-> 编辑修改 */
// console.log(document.querySelector('.items'));

// const ul = document.querySelector('.items');
// // ul.remove();

// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello World';
// ul.children[1].textContent = 'Brad'; //子元素索引
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'
// /* innerHTML  放入HTML的相关内容，实现了网页内容的动态编辑 */

// const btn = document.querySelector('.btn')
// btn.style.background = 'lightblue';
// //style方法用于设置样式，实现了CSS的作用，从而可以根据JS中的事件和函数实现静态CSS难以实现的动态样式


/* 事件 */
// const btn = document.querySelector('.btn')
// btn.addEventListener('click',(e)=>{//定义e为一个事件参数
//     e.preventDefault();
//     console.log('click');
//     console.log(e.target.className);//target会给出实际的元素
// })
