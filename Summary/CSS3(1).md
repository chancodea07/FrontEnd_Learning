# CSS 3（Ⅱ）
> 提要：CSS网页布局
>
> CSS除了选择器以外还有对应的布局方法，这里主要介绍盒子模型及其相关的布局方法

## 盒子模型的概念

所有HTML元素可以看作盒子，在CSS中，"box model"这一术语是用来设计和布局时使用。

CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。

盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。

<img src="https://www.runoob.com/images/box-model.gif" alt="CSS box-model" style="zoom:75%;" />

在CSS中，width和height表示设置的是Content的高度和宽度

## 边框

### 边框宽度

border-width，默认值一般都是3px，不写默认取默认值

指定四个方向的边框宽度，最多附四个参数表示分别设置宽度用空格分开，不要用其他的符号

- 四个值顺序：
  - 上 右 下 左，顺时针排列
  - 三个值：上 左右 下
  - 两个值：上下 左右
  - 一个值：上下左右

> 另外还有一组：border-xxx-width: 10px
>
>  xxx:top/right/bottom/left
>
> 用来单独制定某一个边的宽度

### 边框颜色

- border-color，也可以仿照border的所有语法指定某一边/多个边的颜色，默认为黑色

### 边框的样式

border-style，也可以仿照border的所有语法指定某一边/多个边的样式

- solid:表示实线
- dotted 表示点状虚线
- dashed 虚线
- double 双线

### 简写属性

 border简写属性，通过该属性可以同时设置边框的所有相关样式，并且没有顺序要求

- border: width color style(三个属性没有顺序要求)

- border-xxx->xxx:top/right/bottom/left，代指某个边框

- border-xxx:none 指代该位置的边框没有样式

```css
border-top: 15px red solid;
```

## 边距

### 内边距：padding

表示内容和边框的距离

内边距的设置影响盒子的大小，**背景颜色会延申到内边距上**

盒子可见框的大小，由内容区、内边距和边框共同决定，所以在计算盒子大小时，需要将这三个区域加到一起计算

![image-20210501154810216](CSS3(1).assets/image-20210501154810216.png)

### 外边距：margin

外边距不会影响盒子可见框的大小，外边距会影响盒子的位置

一共有四个方向的外边距

- margin-top:上外边距，设置一个正值，元素会向下移动

- margin-left:左外边距，设置一个正值，元素会向右移动

-  margin-bottom:下外边距，设置一个正值，其下的元素向下移动

-  margin-right:右外边距，默认为0，不会产生任何效果

> 元素在页面中是自左向右排列的，所以默认情况下，如果设置的是左和上外边距，则将会移动元素自身，而设置其他边距（右或下，）会移动其他元素

margin也可以设置为负值，意味着相反方向

## 盒模型的布局

### 水平布局

元素在其父元素中水平方向的位置由以下**⑦**个属性共同决定

- `margin-left`
- `border-left`
- `padding-left`
- `width`
- `padding-left`
- `border-left`

- `margin-right`

**一个元素中在其父元素中必须要满足以下等式**

![image-20210501211134630](CSS3(1).assets/image-20210501211134630.png)

七个值进行相加，**总和必须等于其父元素内容区的宽度**

> 以上等式必须满足，如果计算结果使得等式不成立，则称其为 **过度约束**
>
> 等式会自动调整
>
> - 如果这7个值中没有为auto的情况，则浏览器会自动调整`margin-right`的值，使得等式满足
>
> - 这七个值中有三个值可以设置为auto（width缺省值就是auto）
>
>   - **width**
>
>   - **margin-left**
>
>   - **margin-right**
>
>     - 如果某个值为auto，则会自动调整为auto的那个值以使得等式成立
>
>       - ```html
>         <style>
>           .outer{
>             width: 800px;
>             height: 200px;
>             border: 10px red solid;
>           }
>           .inner{
>             width: auto;
>             height: 200px;
>             background-color: #bfa;
>             margin-left: 100px;
>             margin-right: 200px;
>           }
>         </style>
>         <body>
>           <div class="outer">
>             <div class="inner"></div>
>           </div>
>         </body>
>         </html>
>         ```
>
>       ![image-20210501212202566](CSS3(1).assets/image-20210501212202566.png)
>
>     - 如果一个宽度和一个外边距都设置为auto，则宽度会调整到最大值
>
>     - 三个值都为auto，宽度最大，外边距均取零
>
>     - 两个外边距为auto，宽度为固定值，则两个外边距会取相同的值，常利用这一特点使得一个元素在其父元素中水平居中
>
>       - ```css
>         width: xxxpx;
>         margin:0 auto
>         ```

