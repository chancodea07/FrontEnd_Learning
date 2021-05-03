# CSS3 (Ⅰ)

> 提要：
>
> - CSS3 的导入方式
> - CSS3 的三种基本选择器
> - CSS3 的其他常用选择器
> - 字体/文本样式的相关设置
> - 其他杂项

## CSS 简介

### 网页的构成要素

- 结构（HTML）
- 表现（CSS）
- 行为/交互（Javascript）

### CSS

层叠样式表

网页实际上是一个多层的结构，通过 CSS 可以分别为网页的每一各层设置样式，而最终我们可以看到只是网页的最上面一层

CSS 用于设置网页中的元素样式

### 使用 CSS 修改元素样式

- 通过内联标签的方法设置（行内样式，优先级最高）

```html
<p style="color: blue; font-size: 30px;">你好</p>
```

- 将样式编写到 head 标签中的 style 标签里，然后通过 CSS 选择器来选中元素并为其设置各种样式，可以同时未多个标签设置样式，修改时修改一处就可以全部应用，但是内部样式表只可以对一个网页起作用，它里面的样式不可以对其它页面进行复用

```css
p {
	color: green;
	font-size: 20px;
	font-style: underline;
 /*必须遵循css的语法规则，不要用html的语法*/
}
```

## CSS 基本语法

### 基本语法

选择器后跟声明块

选择器：通过选择器可以选中页面中的指定元素

例如 p 的作用就是选中页面中的所有 p 元素

声明块：通过声明块指定要为元素设置的样式，声明块有一个个的声明组成，声明是一个名值对结构：一个样式名对应一个样式值，名和值之间用:链接，以;结尾

```css
p {
	color: lightcoral;
	font-size: 40px;
}
h1 {
	color: rgba(23, 167, 124, 0.733);
}
body {
	background-color: lightyellow;
}
```

### 补充 CSS 的几个常用的样式设置

```css
float: left;
display: block;
height: 50px;
width: 50px;
border-radius: 10px;
background-color: aqua;
text-align: center;
color: red;
text-decoration: none;
margin-right: 5px;
font: bold 20px/50px Arial;
```

## CSS 选择器

### 标签选择器

```css
p {
	color: red;
}
```

### 类 class 选择器

> class 是一个标签的属性，和 id 类似，不同的是 class 可以进行复用，而 id 是唯一的
>
> 一个标签可以有多个类属性名，用空格分隔
>
> ```html
> <p class="blue abc"></p>
> ```

语法：`.class`属性值

```css
.blue {
	color: blue;
}
```

### id 选择器

作用：根据元素的 id 属性选中一个元素

语法：`#id`属性值

```css
#abc {
	background-color: aqua;
	color: red;
}
```

### 选择器的复合使用

#### 交集选择器

> 交集选择器：选中同时符合多个条件的元素
>
> 语法：选择器 1 选择器 2 选择器 3 选择器 n{}
>
> ```html
> <div class="red">我是div</div>
> <div class="red2 a b c">我是div</div>
> ```

```css
div.red {
	font-size: 30px;
}
div.red2.a.b.c {
	color: green;
}
```

#### 并集选择器

> 选择器分组（并集选择器）
>
> 作用：同时选择多个选择器对应的元素，用逗号进行分割
>
> 语法：选择器 1,选择器 2,选择器 n{}

```css
h1,
span {
	font-size: 40px;
}
```

## CSS 中的字体单位

- 像素：

屏幕（显示器）：实际上是由一个一个的小点构成

不同屏幕的像素大小不同，像素越小的阿屏幕显示的效果越清晰

同样的 200 像素，在不同的设备下显示效果不一样

- 百分比：

也可以将属性值设置为属性相对于其父元素的百分比。em 是相对于元素字体大小来计算的。`1em = 1 * font-size`，em 会根据字体大小的改变而改变

- rem 相对于根元素（HTML 字体元素）

## CSS 的其他选择器

### 关系选择器

> 关系合集
>
> - 父元素
>
> 直接包含子元素的元素叫做父元素
>
> - 子元素
>
> 直接被父元素包含的元素
>
> - 祖先元素
>
> 直接或间接包含后代元素的元素叫做祖先元素
>
> **一个元素的父元素也是它的祖先元素**
>
> - 后代元素
>
> 相对于祖先元素的概念，这里不再赘述
>
> - 兄弟元素
>
> 拥有相同的父元素的元素

#### 子元素选择器

子元素选择器：选中指定父元素的指定子元素

格式：父元素 > 子元素 > 子元素

```css
div.box > span {
	color: green;
}
```

#### 后代元素选择器

作用：选中指定元素内的指定后代元素

语法：祖先 后代（用空格分隔）

```css
div span {
	color: skyblue;
}
```

#### 兄弟元素选择器

选择下一个兄弟元素

 前一个 + 下一个

选择下一个所有的兄弟元素

 兄 ~ 弟

```css
p + span {
	color: blue;
}
p ~ span {
	color: green;
}
```

### 属性选择器的使用

> 结合正则表达式理解

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<style>
		/*
        属性选择器：
        [属性名]选择含有指定属性的元素
        [属性名=属性值]选择含有指定属性和指定值的元素
        [属性名^=属性值]选择属性值以指定值开头的元素
        [属性名$=属性值]选择属性值以指定值结尾的元素
        [属性名*=属性值]选择属性值含有指定值的元素
        */
		p[title] {
			color: green;
		}
		p[title="abc"] {
			color: orange;
		}
		p[title^="abc"] {
			color: blue;
		}
		p[title$="abc"] {
			color: red;
		}
		p[title*="abc"] {
			color: lightgreen;
		}
	</style>
	<body>
		<h1>我是标题</h1>
		<p title="abc">少小离家老大回</p>
		<p title="abc">乡音无改鬓毛催</p>
		<p title="abcdef">儿童相见不相识</p>
		<p title="abc">笑问客从何处来</p>
		<p title="ssabc">落霞与孤鹜齐飞</p>
		<p title="helloabc">秋水共长天一色</p>
	</body>
</html>
```

### 伪类选择器

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<style>
		/* 将ul里的第一个li设置为红色 */

		/* 伪类：用来描述一个元素的特殊状态：
            第一个子元素、被点击的元素，鼠标移入的元素……
            伪类一般情况下使用冒号开头
            :first-child 第一个子元素
            :last-child 最后一个子元素
            :nth-child(n)选中第n个子元素，n取非负整数：0，1，2……
                也可以直接传入特殊参数
                2n 表示选中偶数位的元素 或者传入even
                2n+1 奇数位的元素 或者传入odd

            以上这些伪类都是根据所有的子元素进行排序并进行判断，也即选中指定顺序的元素，并且该元素是要求的元素样式才会生效

            :first-of-type
            :last-of-type
            :nth-last-of-type()
            以上几个伪类和上述的类似，不同点是他们在同类型的元素中排序
        */

		ul > li:first-child {
			color: red;
		}
		ul > li:last-child {
			color: green;
		}
		ul > li:nth-child(3) {
			color: yellowgreen;
		}
		/* :not()否定伪类
                将符合条件的元素从选择器中去除，常作为复合选择器中的某一个部分 */

		ul > li:not(:nth-last-of-type(3)) {
			color: blue;
		}
	</style>
	<body>
		<ul>
			<span>我是一个span</span>
			<li>第零个</li>
			<li>第一个</li>
			<li>第二个</li>
			<li>第三个</li>
   <li>第四个</li>
			<li>第五个</li>
			<li>第末个</li>
		</ul>
	</body>
</html>

```

> 这里需要注意的是，
>
> `:nth-of-type(n)`这一伪类选择器是针对具有一组兄弟节点的标签, 用 n 来筛选出在一组兄弟节点的位置
>
> `:nth-child(n)`这一伪类选择器首先找到所有当前元素的兄弟元素，用n来筛选出当前元素的兄弟元素节点的位置。
>
> 可以注意到:**nth-of-type他是当前元素的兄弟元素的第n个，而nth-child是当前元素的兄弟节点的第n个当前元素**
>
> **nth-of-type是取当前元素的兄弟元素的第n个，nth-child取的是当前元素的第n个节点的当前元素，需要进行标签元素的类型判断**



### 伪元素选择器

> 伪元素：表示页面中的一些特殊的，并不真实存在的元素

伪元素使用::开头

- ` ::first-letter` 表示第一个字母

- ` ::first-line` 表示第一行

- ` ::selection` 表示选中的内容

![image-20210430104825627](CSS3.assets/image-20210430104825627.png)

- `::before` 元素的开始位置，必须结合 content 属性使用

- `::after` 元素的结束位置，必须结合 content 属性使用

 两者很常用！实现了使用 css 添加内容

## 选择器的权重

样式冲突：当我们通过不同的选择器选中相同的元素，并且为相同的样式设置不同的值，此时就发生了样式冲突，注意最终显示的样式效果和位置无关

 发生样式冲突时，应用哪个样式由选择器的权重决定

| 选择器                                  | 权重值           |
| --------------------------------------- | ---------------- |
| 直接在标签内部写入 style 属性的内联样式 | 1 0 0 0          |
| id 选择样式                             | 0 1 0 0          |
| 类和伪类选择器                          | 0 0 1 0          |
| 元素选择器                              | 0 0 0 1          |
| 通配选择器                              | 0 0 0 0          |
| 继承样式                                | 没有优先级的概念 |

 比较优先级时，需要将所有的选择器的优先级进行相加运算，最有优先级越高，则越优先显示（分组选择器单独计算）

 选择器的累加不会超过其最大的数量级，例如类选择器叠加值永远小于 id 选择器

 如果优先级相同，此时则优先使用靠下的样式

 可以在样式的后面添加!important 则此时此样式会超过所有的选择器优先级，甚至包括内联样式，但是尽量不要在实际的开发中使用

总之：**越细节/精确的选择器限制优先级越高，同精确的选择器限制时采用就近原则**

id > class > tag

## 样式的继承

> 样式的继承：为一个元素设置的样式同时也会应用到它的后代元素上

继承是发生在祖先后代之上的

继承的设计是为了方便我们进行开发，利用继承可以将一些通用的样式统一设置到共同的祖先元素上，这样只需要设置一次就可以让所有的元素都具有该样式

不是所有的样式都会被继承，比如背景相关的（默认为透明颜色），布局相关等的这些样式都不会被继承，但是从效果上可能会存在覆盖的效果

```html
<style>
		p {
			color: red;
		}
		div {
			color: blue;
		}
	</style>
	<body>
		<p>
			我是一个p元素
			<span>我是一个p元素的span</span>
		</p>
		<span>我是p元素以外的span</span>
		<div>
			我是div
			<span>
				我是div中的sapn
				<em>我是span中的em</em>
			</span>
		</div>
	</body>
```

![image-20210430110413068](CSS3.assets/image-20210430110413068.png)

## 文本样式

### 颜色

> 在CSS中可以直接使用颜色名设置各种颜色

- 颜色名直接进行使用
- RGB：三原色（Red、Blue、Green）调配颜色
          - 每一种颜色的范围：0~255（0% - 100%）
                  语法：RGB(红色、蓝色、绿色)
- RGBA
          在RGB的基础上增设了一个a参数表示不透明度
          a在0~1之间，1表示完全不透明，0表示完全透明，0.5半透明
- 十六进制RGB
          语法：#红色绿色蓝色（十六进制）
          颜色浓度00~ff调整
          颜色两位重复可以进行简写
    -  HSL值
        H 色相 0~360
        S 浓度
        L 亮度

### 文本样式

- 文本对齐
- 首行缩进
- 行高
- 装饰
- 文本图片对齐

代码示例

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
		h1 {
			text-align: center;
			color: rgba(10, 171, 171, 0.755);
		}
		p {
			color: royalblue;
			text-indent: 2em;
			/* 首行缩进 2em */
			font-family: "Times New Roman", Times, serif;
			font-size: 20px;
		}
		.text1 {
			color: brown;
			background-color: antiquewhite;
			text-decoration: line-through;
		}
		.text2 {
			background: yellow;
			height: 100px;
			line-height: 100px; /*设置行高与块元素高度相同,实现上下居中*/
			text-decoration: underline;
		}
		.text3 {
			text-decoration: overline;
		}
    p>span{
      color:rebeccapurple;
      vertical-align:75px;
    }
    ::selection{
      color: aqua;
      background-color: blue;
    }
	</style>
	<body>
		<h1>Hello World</h1>
		<p class="text1">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab illo aut enim
			aliquid pariatur repellat blanditiis architecto illum eligendi
			voluptatibus, quos beatae corporis nam deserunt quae, laboriosam non
			corrupti ex!
		</p>
		<p class="text2">Hello World</p>
		<p class="text3">Hello World?</p>
		<p>
			<img src="image/eg_bulbon.gif" alt="" />
      <span>Hello World</span>
		</p>
	</body>
</html>

```

## 文本阴影和超链接伪类

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style>
            /*
                利用伪类进行处理
                :link表示没有访问过的链接(正常的链接)
               :visited表示访问过的链接，仅能修改字体颜色
            */
			a:link {
                color: #3c0303;
                font-size: 50px;
			}

			a:visited {
                font-size: 50px; /*通常这样的操作是无效的，因为要保护用户隐私*/
				color: orange;
			}
			/* :hover 用来表示鼠标移入的状态 :active 用来表示鼠标点击 */
			a:hover{
				color: red;
			}
			a:active{
				color: blueviolet;
				font-size: 70px;
			}
		</style>

	</head>
	<body>
		<!--
        1.没有访问过的链接
        2.已经访问过的链接
     -->
		<a href="https://www.baidu.com">Baidu_已经访问</a>
		<br /><br />
		<br><br>
		<a href="https://www.hao123.com">Hao123未访问</a>
		<a href="https://www.hao123.com">Hao123_未访问</a>
	</body>
</html>
```

