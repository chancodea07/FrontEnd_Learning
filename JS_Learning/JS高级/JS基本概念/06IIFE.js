/*
    IIFE：Immediately-Invoked Function Expression
    匿名函数自调用
    作用：
        隐藏实现
        不会污染外部（全局的）命名空间
        编写js模块
    匿名函数自调用的分号问题：
        小括号开头的前一条语句
        中方括号开头的前一条语句
 */
(function () {// 匿名函数自调用
    var a = 3;
    console.log(a + 3)
})();
var a = 4;
console.log(a);
(() => console.log("***********"))();

var obj = {}
;(function () {
    var a = 1;

    function test() {
        console.log(++a);
    }

    function test2() {
        console.log('test2()');
    }

    obj.$ = function () {//向外暴露一个全局函数
        return {
            test: test
        }
    }
})();
obj.$().test()
//$ 是一个函数，$执行后返回的是一个对象