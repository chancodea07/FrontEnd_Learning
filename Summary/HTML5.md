# HTML 学习总结

## HTML基本结构

- （1）文档声明：`<!DOCTYPE html>`
- （2）html标签对：`<html></html>`
- （3）head标签对：`<head></head>`
- （4）body标签对：`<body></body>`

## 基本标签

在HTML中，一般来说，只有6个标签能放在head标签内

- **title标签**：定义网页标题
- 在HTML中，**meta标签**一般用于定义页面的特殊信息，例如页面关键字、页面描述等。
  - keywords：网页关键字
  - description：网页描述
  - 在HTML中，meta标签的http-equiv属性只有两个重要作用：定义网页所使用的编码；定义网页自动刷新跳转



- **style** 定义元素的CSS样式
- 在HTML中，**script标签**用于定义页面的JavaScript代码，也可以引入外部JavaScript文件。
- 在HTML中，link标签用于引入外部样式文件（CSS文件）
- base标签，没用

## 文本

### 静态和动态页面

静态页面和动态页面的区别在于：**是否与服务器进行数据交互**

### 分类

#### 标题标签

在HTML中，共有6个级别的标题标签：h1、h2、h3、h4、h5、h6。其中h是header的缩写。

#### 段落标签

在HTML中，我们可以使用“p标签”来显示一段文字。自带换行

**并且段落与段落之间有一定的间距（默认样式）**

#### 换行标签

`<br/>`

#### 文本标签

常用的几个如下所示

| 标签   | 语义                  | 说明 |
| :----- | :-------------------- | :--- |
| strong | strong（强调）        | 粗体 |
| em     | emphasized（强调）    | 斜体 |
| sup    | superscripted（上标） | 上标 |
| sub    | subscripted（下标）   | 下标 |

#### 水平线标签

在HTML中，我们可以使用“hr标签”来实现一条水平线。hr，是horizon（水平线）的缩写。

#### div标签

在HTML中，我们可以使用“div标签”来划分HTML结构，从而配合CSS来整体控制某一块的样式。使用div标签来划分区域，使得代码更具有逻辑性。

#### 自闭合标签&一般标签

（1）一般标签：由于有开始符号和结束符号，因此可以在内部插入其他标签或文字。

（2）自闭合标签：由于只有开始符号而没有结束符号，因此不可以在内部插入标签或文字。所谓的“自闭合”，指的是本来要用一个配对的结束符号来关闭，然而它却“自己”关闭了。

| 标签        | 说明                             |
| :---------- | :------------------------------- |
| `<meta />`  | 定义网页的信息（供搜索引擎查看） |
| `<link />`  | 引入“外部CSS文件”                |
| `<br />`    | 换行标签                         |
| `<hr />`    | 水平线标签                       |
| `<img />`   | 图片标签                         |
| `<input />` | 表单标签                         |

### 块级元素和行内元素

（1）块元素独占一行，排斥其他元素（包括块元素和行内元素）与其位于同一行。

（2）块元素内部可以容纳其他块元素和行内元素。

在HTML中，行内元素跟块元素恰恰相反，行内元素是可以与其他行内元素位于同一行的。此外，行内元素内部（标签内部）只可以容纳其他行内元素，不可以容纳块元素。

（1）行内元素可以与其他行内元素位于同一行。

（2）行内元素内部可以容纳其他行内元素，但不可以容纳块元素。

### 特殊符号

空格：`&nbsp `1个汉字约等于3个`&nbsp`

## 列表

在HTML中，列表共有3种：**有序列表、无序列表和定义列表。**

- ordered list ol
- unorder list ul
  - 两者都需要配合list li 列表项标签进行使用

在实际的前端开发中，无序列表比有序列表更为实用。更准确点说，我们一般都是使用无序列表，几乎用不到有序列表。

（1）ul元素的子元素只能是li，**不能是其他元素**。**文本不能直接放在ul元素内**

（2）ul元素内部的文本，只能在li元素内部添加，不能在li元素外部添加。

> 学习HTML的目的并不是记住所有的标签，更重要的是在你需要的地方使用正确的语义化标签。把标签用在对的地方，这才是学习HTML的目的所在。

## 表格

### 表格的基本结构

（1）表格：table标签

（2）行：tr标签

（3）单元格：td标签

```html
<table>
    <tr>
        <td>单元格1</td>
        <td>单元格2</td>
    </tr>
    <tr>
        <td>单元格3</td>
        <td>单元格4</td>
    </tr>
</table>
```

tr，指的是table row（表格行）；td，指的是table data cell（表格单元格）。

`<table>`和`</table>`表示整个表格的开始和结束，`<tr>`和`</tr>`表示行的开始和结束，而`<td>`和`</td>`表示单元格的开始和结束。

在表格中，有多少组`<tr></tr>`，就表示有多少行。

### 表格的完整结构

- 标题 caption标签
- 表头单元格 th
  - th，指的是table header cell（表头单元格）
- 表行单元格 td
  - td，指的是table data cell（表行单元格）

### 表格的语义化

一个完整的表格包含：table、caption、tr、th、td。为了更深一地对表格进行语义化，HTML引入了thead、tbody和tfoot标签。

**thead、tbody和tfoot把表格划分为3部分：表头、表身、表脚。有了这些标签，表格语义更加良好，结构更加清晰，也更具有可读性和可维护性。**也为后续CSS样式添加做准备

```html
<!DOCTYPE html> 
<html>
<head>
    <meta charset="utf-8" />
    <title>表格语义化</title>
    <style>
        table,tr,td,th{border:1px solid silver;}
    </style>
</head>
<body>
    <table>
        <caption>考试成绩表</caption>
        <thead>    
            <tr>
                <th>姓名</th>
                <th>语文</th>
                <th>英语</th>
                <th>数学</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>小明</td>
                <td>80</td>
                <td>80</td>
                <td>80</td>
            </tr>
            <tr>
                <td>小红</td>
                <td>90</td>
                <td>90</td>
                <td>90</td>
            </tr>
            <tr>
                <td>小杰</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>平均</td>
                <td>90</td>
                <td>90</td>
                <td>90</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
```

<!DOCTYPE html>  <html> <head>     <meta charset="utf-8" />     <title>表格语义化</title>     <!--这里使用CSS为表格加上边框-->     <style type="text/css">         table,tr,td,th{border:1px solid silver;}     </style> </head> <body>     <table>         <caption>考试成绩表</caption>         <thead>                 <tr>                 <th>姓名</th>                 <th>语文</th>                 <th>英语</th>                 <th>数学</th>             </tr>         </thead>         <tbody>             <tr>                 <td>小明</td>                 <td>80</td>                 <td>80</td>                 <td>80</td>             </tr>             <tr>                 <td>小红</td>                 <td>90</td>                 <td>90</td>                 <td>90</td>             </tr>             <tr>                 <td>小杰</td>                 <td>100</td>                 <td>100</td>                 <td>100</td>             </tr>         </tbody>         <tfoot>             <tr>                 <td>平均</td>                 <td>90</td>                 <td>90</td>                 <td>90</td>             </tr>         </tfoot>     </table> </body> </html>

### 表格的合并

在td中添加属性实现列或行的合并

- 合并行：rowspan 所谓的合并行，其实就是将表格相邻的N个行合并

```html
<table>
        <tr>
            <td>姓名:</td>
            <td>小明</td>
        </tr>
        <tr>
            <td rowspan="2">喜欢水果:</td>
            <td>苹果</td>
        </tr>
        <tr>
            <td>香蕉</td>
        </tr>
</table>
```

<table>         <tr>             <td>姓名:</td>             <td>小明</td>         </tr>         <tr>             <td rowspan="2">喜欢水果:</td>             <td>苹果</td>         </tr>         <tr>             <td>香蕉</td>         </tr>     </table>

- 合并列：colspan

## 图片

### 图片标签

在HTML中，我们可以使用img标签来显示一张图片。对于img标签，只需要掌握它的3个属性：src、alt和title。

```html
<!DOCTYPE html> 
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>
    <img src="img/haizei.png" alt="海贼王之索隆" title="海贼王之索隆">
</body>
</html>
```

src：图片源地址/路径

alt：图片不加载显示的提示文字

title：当我们把鼠标移到图片上时，就会显示title中的提示文字

src和alt这两个是必选属性，一定要添加，而title是可选属性，可加可不加。

### 绝对路径和相对路径

常识性知识，这里提一下，不再展开

### 图片格式

- jpg
- png
- gif

如果想要展示色彩丰富而高品质图片，可以使用jpg格式；如果是一般图片，为了减少体积或者想要透明效果，可以使用png格式；如果是动画图片，可以使用gif格式。

**jpg图片不支持透明，png图片支持透明，而gif图片可以做动画**。

前端对PS基本操作要求：

能用Photoshop来进行基本的图片处理，例如图片切片、图片压缩、格式转换等

## 超链接

在HTML中，我们可以使用a标签来实现超链接。

不管是哪种超链接，我们都是把文字或图片放到a标签内部来实现的。

- 文本超链接

```html
<a href="http://www.baidu.com">百度首页</a>
```

- 图片超链接（超链接标签中插入img标签）

```html
<a href="http://www.baidu.com"><img src="img/xxx.png" alt="百度首页"/></a>
```

### 超链接属性

a标签的target属性取值有4种，如下表所示。

| 属性值  | 说明                       |
| :------ | :------------------------- |
| _self   | 默认值，在原来窗口打开链接 |
| _blank  | 在新窗口打开链接           |
| _parent | 在父窗口打开链接           |
| _top    | 在顶层窗口打开超链接       |

一般情况下，我们只会用到_blank这一个值，也只要记住这一个就够了，其他三个值不需要去深究。

### 超链接锚点

有些页面内容比较多，导致页面过长，此时用户需要不停拖动浏览器上的滚动条才可以看到下面的内容。为了方便用户操作，我们可以使用锚点链接来优化用户体验。

在HTML中，锚点链接其实是内部链接的一种，它链接地址（也就是href）指向的是当前页面的某个部分。所谓的锚点链接，简单来说，就是点击某一个超链接，然后它就会跳到当前页面的某一部分。

主要操作逻辑：

a的href属性取到了需要跳转的标签的id属性，注意要加`#`

## 表单（重点）

表单是实现动态页面的基础，是我们接触动态页面的第一步。其中表单最重要的作用就是：在浏览器端收集用户的信息，然后将数据提交给服务器来处理。

### 分类

#### 标签

- form
- input
- textarea
- select
- option

#### 功能

（1）单行文本框

（2）密码文本框

（3）单选框

（4）复选框

（5）按钮

（6）文件上传

（7）多行文本框

（8）下拉列表

### form标签属性

| 属性    | 说明     |
| :------ | :------- |
| name    | 表单名称 |
| method  | 提交方式 |
| action  | 提交地址 |
| target  | 打开方式 |
| enctype | 编码方式 |

- method属性用于指定表单数据使用哪一种http提交方法。method属性取值有两个：一个是“get”，另外一个是“post”。
- 在form标签中，action属性用于指定表单数据提交到哪一个地址进行处理。（后端  PHP ASP.NET）
- form标签的target属性跟a标签的target属性是一样的，都是用来指定窗口的打开方式。一般情况下，我们只会用到“_blank”这一个属性值。

### input自闭合标签属性（type）

![img](http://api.lvyestudy.com/upload/articles/f8559cb8f9eda24ge2bda815.png)

#### text单行文本框

| 常用属性  | 说明                                       |
| :-------- | :----------------------------------------- |
| value     | 设置文本框的默认值，也就是默认情况下文本框 |
| maxlength | 设置文本框中最多可以输入的字符数           |

- value属性用于设置单行文本框中默认的文本，如果没有设置，就是空白。

#### password密码文本框

常用属性和上面一样

密码文本框仅仅能使得周围的人看不见你输入的内容是什么，实际上它并不能保证数据的安全。为了保证数据安全，我们需要在浏览器与服务器之间建立一个安全连接，不过这属于后端技术，这里了解一下就行。

#### radio单选

```html
<input type="radio" name="gender" value="男" checked />男
```

在实际开发中，对于同一组的单选框，必须要设置一个相同的name，这样才会把这些选项归为同一个组上面。

```html
<form method="post">
        性别:
        <input type="radio" name="gender1" value="男" />男
        <input type="radio" name="gender2" value="女" />女
</form>
```

```html
<form method="post">
        性别:
        <input type="radio" name="gender1" value="男" />男
        <input type="radio" name="gender1" value="女" />女
</form>
```

第一个不能实现单选，因为名字不一样

第二个可以实现单选

为了更好地语义化，表单元素与后面的文本一般都需要借助label标签关联起来。

```html
<label><input type="radio" name="gender" value="男" />男</label>
<label><input type="radio" name="gender" value="女" />女</label>
```

一般情况下，value属性取值跟后面的文本是相同的。之所以加上value属性，是为了方便JavaScript或者服务器操作数据用的。实际上，所有表单元素的value属性的作用都是一样的。

#### checkbox复选

```html
<input type="checkbox" name="组名" value="取值" />
```

name属性表示复选框所在的组名，而value表示复选框的取值。跟单选框一样，这两个属性也必须要设置。

复选框中的name跟单选框中的name都是用来设置“组名”的，表示该选项位于哪一组中。

两者都设置name属性，为什么单选框只能选中一项，而复选框可以选择多项呢？这是因为浏览器会自动识别这是“单选框组”还是“复选框组”（说白了就是根据type属性取值来识别）。如果是单选框组，就只能选择一项；如果是复选框组，就可以选择多项。

**想在默认情况下，让复选框某几项选中，我们也可以使用checked属性来实现。这一点跟单选框是一样的。**

#### 按钮

##### 普通button

在HTML中，普通按钮一般情况下都是配合JavaScript来进行各种操作的。

```html
<script>
        window.onload = function () 
        {
            var oBtn = document.getElementsByTagName("input");
            oBtn[0].onclick = function () 
            {
                alert("I ❤ HTML！");
            };
        }
    </script>
</head>
<body>
    <form method="post">
        <input type="button" value="表白"/> 
        <!--value的取值就是按钮上的文字-->
    </form>
</body>
```

##### 提交submit

在HTML中，提交按钮一般都是用来给服务器提交数据的。我们可以把提交按钮看成是一种特殊功能的普通按钮。

##### 重置reset

在HTML中，重置按钮一般用来清除用户在表单中输入的内容。重置按钮也可以看成是具有特殊功能的普通按钮。

value的取值就是按钮上的文字。

#### 多行文本框textarea

```html
<textarea rows="行数" cols="列数" value="取值">默认内容</textarea>
```

多行文本框的默认显示文本是在标签对内部设置，而不是在value属性中设置的。一般情况下，不需要设置默认显示文本。

对于文本框，现在我们可以总结出以下2点。

- （1）HTML有3种文本框：单行文本框、密码文本框、多行文本框。
- （2）单行文本框和密码文本框使用的都是input标签，多行文本框使用的是textarea标签。

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>
    <form method="post">
        个人简介：<br/>
        <textarea rows="5" cols="20">请介绍一下你自己</textarea>
    </form>
</body>
</html>
```

<!DOCTYPE html> <html> <head>     <meta charset="utf-8" />     <title></title> </head> <body>     <form method="post">         个人简介：<br/>         <textarea rows="5" cols="20">请介绍一下你自己</textarea>     </form> </body> </html>

后续可以通过js进行更多操作，比如点击文本框清除默认内容

#### 下拉菜单select

```html
<select>
    <option>选项内容</option>
    ……
    <option>选项内容</option>
</select>
```

在HTML中，select标签常用属性有两个，如下表所示。

| 属性     | 说明                                   |
| :------- | :------------------------------------- |
| multiple | 设置下拉列表可以选择多项               |
| size     | 设置下拉列表显示几个列表项，取值为整数 |

默认情况下，下拉列表只能选择一项，我们可以通过multiple属性设置下拉列表可以选择多项。想要选取多项，可以使用“Ctrl+鼠标左键”来选取。

下拉列表的multiple属性没有属性值，这是HTML5的最新写法，这个跟单选框中的checked属性是一样的。

在HTML中，option标签常用属性有两个，如下表所示。

| 属性     | 说明     |
| :------- | :------- |
| selected | 是否选中 |
| value    | 选项值   |

对于value属性，就不用多说了，几乎所有表单元素都有value属性，这个属性是配合JavaScript以及服务器进行操作的。

###表单元素的位置

表单元素不一定都要放在form标签内。对于要与服务器进行交互的表单元素就必须放在form标签内才有效。如果表单元素不需要跟服务器进行交互，那就没必要放在form标签内。

