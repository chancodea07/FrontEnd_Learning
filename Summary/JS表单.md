# JS与表单验证

## 表单的类型（type参数）

- 文本框   `text`
- 下拉框   `<select>`
- 单选框   `radio`
- 多选框   `checkbox`
- 隐藏域   `hidden`
- 密码框   `password`
- 提交按钮 `submit`

## 表单的目的：提交信息

> 获得提交的信息

```html

<form action="#" method="post">
    <p>
        <span>用户名：</span><input type="text" id="user-name">;
    </p>
    <p>
        <span>性别</span>
        <!--选择框的值就是定义好的value-->
        <input type="radio" name="sex" value="man"> 男
        <input type="radio" name="sex" value="woman"> 女
    </p>
    <input type="submit">
</form>
<script>
    // 立刻得到输入框的值
    let username = document.getElementById('user-name');
    //修改输入框的值
    username.value = "123";
    
    let sex = document.getElementsByTagName('input');
    sex[0].checked //表单中的选项被选中的属性：checked
</script>
```

