---
prev: ../../code/css/
next: ../../code/es6/
---

# JavaScript规范

![front-end-develop-standard05.jpg](../../images/front-end-develop-standard05.jpg)

## 最佳原则

坚持制定好的代码规范。

无论团队人数多少，代码应该同出一门。

如果你想要为这个规范做贡献或觉得有不合理的地方，请访问[New Issue](https://github.com/niceboybao/front-end-develop-standard/issues)。

## 基本规范

### 1、缩进

使用soft tab（4个空格）。

```javascript
var x = 1,
    y = 1;

if (x < y) {
    x += 10;
} else {
    x += 1;
}
```

### 2、分号

以下几种情况后需加分号：

- 变量声明
- 表达式
- return
- throw
- break
- continue
- do-while

```javascript
/* var declaration */
var x = 1;

/* expression statement */
x++;

/* do-while */
do {
    x++;
} while (x < 10);
```

### 3、空格

以下几种情况需要空格：

- 二元运算符前后
- 三元运算符'?:'前后
- 代码块'{'前
- 下列关键字前：else, while, catch, finally
- 下列关键字后：if, else, for, while, do, switch, case, try, catch, finally, with, return, typeof
- 单行注释'//'后（若单行注释和代码同行，则'//'前也需要），多行注释'*'后
- 对象的属性值前
- for循环，分号后留有一个空格，前置条件如果有多个，逗号后留一个空格
- 无论是函数声明还是函数表达式，'{'前一定要有空格
- 函数的参数之间

```javascript
// not good
var a = {
    b :1
};

// good
var a = {
    b: 1
};

// not good
++ x;
y ++;
z = x?1:2;

// good
++x;
y++;
z = x ? 1 : 2;

// not good
var a = [ 1, 2 ];

// good
var a = [1, 2];

// not good
var a = ( 1+2 )*3;

// good
var a = (1 + 2) * 3;

// no space before '(', one space before '{', one space between function parameters
var doSomething = function(a, b, c) {
    // do something
};

// no space before '('
doSomething(item);

// not good
for(i=0;i<6;i++){
    x++;
}

// good
for (i = 0; i < 6; i++) {
    x++;
}
```

### 4、单行注释

双斜线后，必须跟一个空格；缩进与下一行代码保持一致；可位于一个代码行的末尾，与代码间隔一个空格。

```javascript
if (condition) {
    // if you made it here, then all security checks passed
    allowed();
}

var zhangsan = 'zhangsan'; // one space after code
```

### 5、多行注释

最少三行, '*'后跟一个空格，具体参照右边的写法；

```javascript
/*
 * one space after '*'
 */
var x = 1;
```

### 6、文档注释

建议在以下情况下使用：

- 所有常量
- 所有函数
- 所有类

```javascript
/**
 * @func
 * @desc 一个带参数的函数
 * @param {string} a - 参数a
 * @param {number} b=1 - 参数b默认值为1
 * @param {string} c=1 - 参数c有两种支持的取值</br>1—表示x</br>2—表示xx
 * @param {object} d - 参数d为一个对象
 * @param {string} d.e - 参数d的e属性
 * @param {string} d.f - 参数d的f属性
 * @param {object[]} g - 参数g为一个对象数组
 * @param {string} g.h - 参数g数组中一项的h属性
 * @param {string} g.i - 参数g数组中一项的i属性
 * @param {string} [j] - 参数j是一个可选参数
 */
function foo(a, b, c, d, g, j) {
    ...
}
```

### 7、引号

最外层统一使用单引号。

```javascript
// not good
var x = "test";

// good
var y = 'foo',
    z = '<div id="test"></div>';
```

### 8、变量声明

一个函数作用域中所有的变量声明尽量提到函数首部，用一个var声明，不允许出现两个连续的var声明。

```javascript
function doSomethingWithItems(items) {
    // use one var
    var value = 10,
        result = value + 10,
        i,
        len;

    for (i = 0, len = items.length; i < len; i++) {
        result += 10;
    }
}
```

### 9、函数

- 无论是函数声明还是函数表达式，'('前不要空格，但'{'前一定要有空格；

- 函数调用括号前不需要空格；

- 立即执行函数外必须包一层括号；

- 不要给inline function命名；

- 参数之间用', '分隔，注意逗号后有一个空格。

```javascript
// no space before '(', but one space before'{'
var doSomething = function(item) {
    // do something
};

function doSomething(item) {
    // do something
}

// not good
doSomething (item);

// good
doSomething(item);

// requires parentheses around immediately invoked function expressions
(function() {
    return 1;
})();

// not good
[1, 2].forEach(function x() {
    ...
});

// good
[1, 2].forEach(function() {
    ...
});

// not good
var a = [1, 2, function a() {
    ...
}];

// good
var a = [1, 2, function() {
    ...
}];

// use ', ' between function parameters
var doSomething = function(a, b, c) {
    // do something
};
```

### 10、数组、对象

- 使用字面值创建对象;

- 对象属性名不需要加引号；

- 对象以缩进的形式书写，不要写在一行；

- 数组、对象最后不要有逗号。

```javascript
// bad
var item = new Object();

// good
var item = {};

// not good
var a = {
    'b': 1
};

var a = {b: 1};

var a = {
    b: 1,
    c: 2,
};

// good
var a = {
    b: 1,
    c: 2
};
```

### 12、括号

下列关键字后必须有大括号（即使代码块的内容只有一行）：if, else, for, while, do, switch, try, catch, finally, with。

```javascript
// not good
if (condition)
    doSomething();

// good
if (condition) {
    doSomething();
}
```

### 13、null

适用场景：

- 初始化一个将来可能被赋值为对象的变量
- 与已经初始化的变量做比较
- 作为一个参数为对象的函数的调用传参
- 作为一个返回对象的函数的返回值

不适用场景：

- 不要用null来判断函数调用时有无传参
- 不要与未初始化的变量做比较

```javascript
// not good
function test(a, b) {
    if (b === null) {
        // not mean b is not supply
        ...
    }
}

var a;

if (a === null) {
    ...
}

// good
var a = null;

if (a === null) {
    ...
}
```

### 14、undefined

- 永远不要直接使用undefined进行变量判断；

- 使用typeof和字符串'undefined'对变量进行判断。

```javascript
// not good
if (person === undefined) {
    ...
}

// good
if (typeof person === 'undefined') {
    ...
}
```

### 15、jshint

- 用'===', '!=='代替'==', '!='；

- for-in里一定要有hasOwnProperty的判断；

- 不要在内置对象的原型上添加方法，如Array, Date；

- 不要在内层作用域的代码里声明了变量，之后却访问到了外层作用域的同名变量；

- 变量不要先使用后声明；

- 不要在一句代码中单单使用构造函数，记得将其赋值给某个变量；

- 不要在同个作用域下声明同名变量；

- 不要在一些不需要的地方加括号，例：delete(a.b)；

- 不要使用未声明的变量（全局变量需要加到.jshintrc文件的globals属性里面）；

- 不要声明了变量却不使用；

- 不要在应该做比较的地方做赋值；

- debugger不要出现在提交的代码里；

- 数组中不要存在空元素；

- 不要在循环内部声明函数；

- 不要像这样使用构造函数，例：new function () { ... }, new Object；

```javascript
// not good
if (a == 1) {
    a++;
}

// good
if (a === 1) {
    a++;
}

// good
for (key in obj) {
    if (obj.hasOwnProperty(key)) {
        // be sure that obj[key] belongs to the object and was not inherited
        console.log(obj[key]);
    }
}

// not good
Array.prototype.count = function(value) {
    return 4;
};

// not good
var x = 1;

function test() {
    if (true) {
        var x = 0;
    }

    x += 1;
}

// not good
function test() {
    console.log(x);

    var x = 1;
}

// not good
new Person();

// good
var person = new Person();

// not good
delete(obj.attr);

// good
delete obj.attr;

// not good
if (a = 10) {
    a++;
}

// not good
var a = [1, , , 2, 3];

// not good
var nums = [];

for (var i = 0; i < 10; i++) {
    (function(i) {
        nums[i] = function(j) {
            return i + j;
        };
    }(i));
}

// not good
var singleton = new function() {
    var privateVar;

    this.publicMethod = function() {
        privateVar = 1;
    };

    this.publicMethod2 = function() {
        privateVar = 2;
    };
};
```

## 其他杂项规范

- 不要混用tab和space；

- 不要在一处使用多个tab或space；

- 换行符统一用'LF'；

- 对上下文this的引用只能使用'_this', 'that', 'self'其中一个来命名；

- 行尾不要有空白字符；

- switch的falling through和no default的情况一定要有注释特别说明；

- 不允许有空的代码块。

```javascript
// not good
var a   = 1;

function Person() {
    // not good
    var me = this;

    // good
    var _this = this;

    // good
    var that = this;

    // good
    var self = this;
}

// good
switch (condition) {
    case 1:
    case 2:
        ...
        break;
    case 3:
        ...
    // why fall through
    case 4
        ...
        break;
    // why no default
}

// not good with empty block
if (condition) {

}
```

## 写在最后

### 1、JavaScript代码格式化

> JavaScript的代码格式化，能解决部分JavaScript代码规范，如代码缩进、空格、分号、换行、引号、大小括号间隔对称等。所以能解决的这些规范仅供参考。
