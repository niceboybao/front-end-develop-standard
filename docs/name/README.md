---
prev: ../
next: ../code/html/
---

# 命名规范

![front-end-develop-standard02.jpg](../images/front-end-develop-standard02.jpg)

## 最佳原则

坚持制定好的代码规范。

无论团队人数多少，代码应该同出一门。

如果你想要为这个规范做贡献或觉得有不合理的地方，请访问[New Issue](https://github.com/niceboybao/front-end-develop-standard/issues)。

## 文件结构命名

### 项目命名

- 全部采用小写方式， 以横线分隔。（自己的项目、组件、插件使用的居多）

例：my-project-name 和 front-end-develop-standard

~~- PascalCase 帕斯卡命名法。(一些大厂项目也经常采用此类命名法)~~

~~例：MyProjectName~~

### 目录命名

参照项目命名规则； 有复数结构时，要采用复数命名法。

例：scripts, styles, images,components data_models

### HTML文件命名

参照项目命名规则。

例：error_report.html

### CSS, SCSS文件命名

参照项目命名规则。

例：retina_sprites.scss

### JS文件命名

参照项目命名规则。

例：account_model.js

## CSS, SCSS类命名

- 类名使用小写字母，以中划线分隔
- id采用驼峰式命名
- scss中的变量、函数、混合、placeholder采用驼峰式命名

```scss
/* class */
.element-content {
    ...
}

/* id */
#myDialog {
    ...
}

/* 变量 */
$colorBlack: #000;

/* 函数 */
@function pxToRem($px) {
    ...
}

/* 混合 */
@mixin centerBlock {
    ...
}

/* placeholder */
%myDialog {
    ...
}
```

## JavaScript命名

### 变量命名

- 标准变量采用驼峰式命名（除了对象的属性外，主要是考虑到cgi返回的数据）
- 'ID'在变量名中全大写
- 'URL'在变量名中全大写
- 'Android'在变量名中大写第一个字母
- 'iOS'在变量名中小写第一个，大写后两个字母
- 常量全大写，用下划线连接
- jquery对象必须以'$'开头命名
- 对上下文this的引用只能使用'_this', 'that', 'self'其中一个来命名；

```javascript
var thisIsMyName;

var goodID;

var reportURL;

var AndroidVersion;

var iOSVersion;

var MAX_COUNT = 10;

function Person(name) {
    this.name = name;
}

// not good
var body = $('body');

// good
var $body = $('body');
```

### 函数命名

- 普通行数，使用驼峰命名法
- 构造函数，大写第一个字母
- 不要给inline function命名；

```javascript
function doSomething(item) {
    // do something
}
// not good
[1, 2].forEach(function x() {
    ...
});

// good
[1, 2].forEach(function() {
    ...
});
```
