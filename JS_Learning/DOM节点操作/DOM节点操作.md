# DOM 节点操作

浏览器网页就是一个 DOM 树形结构

- 更新：修改 DOM 节点
- 遍历 DOM 节点
- 删除：删除 DOM 节点
- 添加：添加一个新的节点

## 获取网页元素的两种方式

- 利用 DOM 提供的方法获取元素
- 利用节点的层级关系获取元素
  - 逻辑性好，但是兼容性差

这两种方式都可以获取元素节点，节点操作更为简单

## 节点概述

节点具有三个基本属性

- `nodeType`
- `nodeName`
- `nodeValue`

元素节点的 NodeType 为 1，属性节点为 2 文本节点为 3

## 节点的层级关系

> 常见的是父子兄层级关系

### 父级节点

```javascript
node.parentNode;
```

- 该属性返回某个节点的父节点，注意是**最近的一个父节点**

### 子节点

```javascript
var ul = document.querySelector("ul");
for (var i = 0; i < ul.childNodes.length; i++) {
	if (ul.childNodes[i].nodeType == 1) {
		console.log(ul.childNodes[i]);
	}
}
```

childNodes 的返回值包含了所有的子节点，包括元素节点、文本节点等

如果只需要获取元素节点，则需要先进行节点类型的判断，一般不提倡使用

`parentNode.children` 是一个只读属性，返回所有的子元素节点，注意其余节点不返回（重点掌握）

实际开发中，经常使用如下方案

1. 如果要使用第一个子元素节点，可以使用`parentNode.children[0]`
2. 最后一个：`parentNode.chilren[parentNode.chilren.length - 1]`

### 兄弟节点

1. `node.nextSibling`

返回当前元素的下一个兄弟元素节点，找不到则返回 null。同样，也是包含所有的节点

2. `node.previousSibling`

返回当前元素上一个兄弟元素节点，找不到则返回 null。同样，也是包含所有的节点

## 创建与添加节点

### 创建

`document.createElement('tagName')`

document.createElement() 方法创建由 tagName 指定的 HTML 元素。因为这些元素原先不存在， 是根据我们的需求动态生成的，所以我们也称为动态创建元素节点。

### 添加

1. `node.appendChild(child)`
   node.appendChild() 方法将一个节点添加到指定父节点的子节点列表末尾。类似于 CSS 里面的 after 伪元素。
2. `node.insertBefore(child, 指定元素)`
   node.insertBefore() 方法将一个节点添加到父节点的指定子节点前面。类似于 CSS 里面的 before 伪元素。

### 删除

`removeChild`

## 复制节点

`node.cloneNode`

返回调用该方法的节点的一个副本

```html
<ul>
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
```

```javascript
var ul = document.querySelector("ul");
var li_clone = ul.children[0].cloneNode();
ul.appendChild().li_clone;
```

1. 如果括号参数为空或者为 false ，则是浅拷贝，即只克隆复制节点本身，不克隆里面的子节点。
2. 如果括号参数为 true ，则是深度拷贝，会复制节点本身以及里面所有的子节点。

## 动态创建元素的区别

- `document.write()`
- `element.innerHTML`
- `document.createElement()`

区别

1. `document.write` 是直接将内容写入页面的内容流，但是文档流执行完毕，则它会导致页面全部重绘
2. `innerHTML` 是将内容写入某个 DOM 节点，不会导致页面全部重绘
3. `innerHTML` 创建多个元素效率更高（不要拼接字符串，采取数组形式拼接），结构稍微复杂
4. `createElement()` 创建多个元素效率稍低一点点，但是结构更清晰

总结：不同浏览器下，`innerHTML` 效率要比 `creatElement` 高

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<style>
		table {
			width: 500px;
			margin: 100px auto;
			border-collapse: collapse;
			text-align: center;
		}
		td,
		th {
			border: 1px solid #333;
		}
		thead tr {
			height: 40px;
			background-color: #ccc;
		}
	</style>
	<body>
		<table cellspacing="0">
			<thead>
				<tr>
					<th>姓名</th>
					<th>科目</th>
					<th>成绩</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody></tbody>
		</table>
		<script>
			// 准备好学生的数据
			class Student {
				constructor(name, subject, score) {
					this.name = name;
					this.subject = subject;
					this.score = score;
				}
			}
			const John = new Student("John", "JavaScript", 100);
			const Rahn = new Student("Rahn", "CSS", 98);
			const Elis = new Student("Elis", "HTML", 98);
			const Wriya = new Student("Wriya", "Python", 95);
			const Helo = new Student("Helo", "Go", 85);
			const Hadis = new Student("Hadis", "Ruby", 85);

			const student_data = [John, Rahn, Elis, Wriya, Helo]; //对象数组
			// tbody中创建行
			const tbody = document.querySelector("tbody");
			/* 创建单元格 */
			for (let i = 0; i < student_data.length; i++) {
				//创建tr行
				let tr = document.createElement("tr");
				tbody.appendChild(tr);
				//行内创建单元格 td 单元格的数量取决于每个对象的属性个数 for循环遍历对象
				//里面的for管理列 td
				for (let k in student_data[i]) {
					// 创建单元格
					let td = document.createElement("td");
					// 对象中的属性值 给 td
					td.innerHTML = student_data[i][k];
					/*
                    对象遍历
                    for(var k in obj)
                    k 得到的是属性名
                    obj得到的是属性值
                    */
					tr.appendChild(td);
				}
				// 创建带有删除两个字的单元格
				let td = document.createElement("td");
				td.innerHTML = '<a href="javascript:;">删除</a>';
				tr.appendChild(td);
			}
			/* 删除操作 */
			let as = document.querySelectorAll("a");
			for (let i = 0; i < as.length; i++) {
				as[i].onclick = function () {
					/* 点击 删除 删除a元素所在的行（链接的父元素的父元素） */
					tbody.removeChild(this.parentNode.parentNode);
				};
			}
		</script>
	</body>
</html>
```
