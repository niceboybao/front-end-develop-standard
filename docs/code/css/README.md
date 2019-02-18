---
prev: ../../code/html/
next: ../../code/javascript/
---

# css规范

![front-end-develop-standard04.jpg](../../images/front-end-develop-standard04.jpg)

## 最佳原则

坚持制定好的代码规范。

无论团队人数多少，代码应该同出一门。

如果你想要为这个规范做贡献或觉得有不合理的地方，请访问[New Issue](https://github.com/niceboybao/front-end-develop-standard/issues)。

## 基本规范

### 1、缩进

使用soft tab（4个空格）。

```css
.element {
    position: absolute;
    top: 10px;
    left: 10px;

    border-radius: 10px;
    width: 50px;
    height: 50px;
}
```

### 2、分号

每个属性声明末尾都要加分号。

```css
.element {
    width: 20px;
    height: 20px;

    background-color: red;
}
```

### 3、空格

以下几种情况不需要空格：

> 属性名后

- 多个规则的分隔符','前
- !important '!'后
- 属性值中'('后和')'前
- 行末不要有多余的空格
- 以下几种情况需要空格：

> 属性值前

- 选择器'>', '+', '~'前后
- '{'前
- !important '!'前
- @else 前后
- 属性值中的','后
- 注释'/_'后和'_/'前

```css
/* not good */
.element {
    color :red! important;
    background-color: rgba(0,0,0,.5);
}

/* good */
.element {
    color: red !important;
    background-color: rgba(0, 0, 0, .5);
}

/* not good */
.element ,
.dialog{
    ...
}

/* good */
.element,
.dialog {

}

/* not good */
.element>.dialog{
    ...
}

/* good */
.element > .dialog{
    ...
}

/* not good */
.element{
    ...
}

/* good */
.element {
    ...
}

/* not good */
@if{
    ...
}@else{
    ...
}

/* good */
@if {
    ...
} @else {
    ...
}
```

### 4、空行

以下几种情况需要空行：

- 文件最后保留一个空行
- '}'后最好跟一个空行，包括scss中嵌套的规则
- 属性之间需要适当的空行，具体见属性声明顺序

```css
/* not good */
.element {
    ...
}
.dialog {
    color: red;
    &:after {
        ...
    }
}

/* good */
.element {
    ...
}

.dialog {
    color: red;

    &:after {
        ...
    }
}
```

### 5、换行

以下几种情况需要换行：

- '{'后和'}'前

- 每个属性独占一行

- 多个规则的分隔符','后

```css
/* not good */
.element
{color: red; background-color: black;}

/* good */
.element {
    color: red;
    background-color: black;
}

/* not good */
.element, .dialog {
    ...
}

/* good */
.element,
.dialog {
    ...
}
```

### 6、注释

- 注释统一用'/__/'（scss中也不要用'//'），具体参照右边的写法；

- 缩进与下一行代码保持一致；

- 可位于一个代码行的末尾，与代码间隔一个空格。

```css
/* Modal header */
.modal-header {
    ...
}

/*
 * Modal header
 */
.modal-header {
    ...
}

.modal-header {
    /* 50px */
    width: 50px;

    color: red; /* color red */
}
```

### 7、引号

- 最外层统一使用双引号；

- url的内容要用引号；

- 属性选择器中的属性值需要引号。

```css
.element:after {
    content: "";
    background-image: url("logo.png");
}

li[data-type="single"] {
    ...
}
```

### 8、颜色

颜色16进制用小写字母；颜色16进制尽量用简写。

```css
/* not good */
.element {
    color: #ABCDEF;
    background-color: #001122;
}

/* good */
.element {
    color: #abcdef;
    background-color: #012;
}
```

### 9、属性简写

属性简写需要你非常清楚属性值的正确顺序，而且在大多数情况下并不需要设置属性简写中包含的所有值，所以建议尽量分开声明会更加清晰；

`margin` 和 `padding` 相反，需要使用简写；

常见的属性简写包括：

- font
- background
- transition
- animation

```css
/* not good */
.element {
    transition: opacity 1s linear 2s;
}

/* good */
.element {
    transition-delay: 2s;
    transition-timing-function: linear;
    transition-duration: 1s;
    transition-property: opacity;
}
```

### 10、媒体查询

尽量将媒体查询的规则靠近与他们相关的规则，不要将他们一起放到一个独立的样式文件中，或者丢在文档的最底部，这样做只会让大家以后更容易忘记他们。

```css
.element {
    ...
}

.element-avatar{
    ...
}

@media (min-width: 480px) {
    .element {
        ...
    }

    .element-avatar {
        ...
    }
}
```

## 其他杂项规范

- 不允许有空的规则；

- 元素选择器用小写字母；

- 去掉小数点前面的0；

- 去掉数字中不必要的小数点和末尾的0；

- 属性值'0'后面不要加单位；

- 同个属性不同前缀的写法需要在垂直方向保持对齐，具体参照右边的写法；

- 无前缀的标准属性应该写在有前缀的属性后面；

- 不要在同个规则里出现重复的属性，如果重复的属性是连续的则没关系；

- 不要在一个文件里出现两个相同的规则；

- 用 border: 0; 代替 border: none;；

- 选择器不要超过4层（在scss中如果超过4层应该考虑用嵌套的方式来写）；

- 发布的代码中不要有 @import；

- 尽量少用'*'选择器。

```css
/* not good */
.element {
}

/* not good */
LI {
    ...
}

/* good */
li {
    ...
}

/* not good */
.element {
    color: rgba(0, 0, 0, 0.5);
}

/* good */
.element {
    color: rgba(0, 0, 0, .5);
}

/* not good */
.element {
    width: 50.0px;
}

/* good */
.element {
    width: 50px;
}

/* not good */
.element {
    width: 0px;
}

/* good */
.element {
    width: 0;
}

/* not good */
.element {
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;

    background: linear-gradient(to bottom, #fff 0, #eee 100%);
    background: -webkit-linear-gradient(top, #fff 0, #eee 100%);
    background: -moz-linear-gradient(top, #fff 0, #eee 100%);
}

/* good */
.element {
    -webkit-border-radius: 3px;
       -moz-border-radius: 3px;
            border-radius: 3px;

    background: -webkit-linear-gradient(top, #fff 0, #eee 100%);
    background:    -moz-linear-gradient(top, #fff 0, #eee 100%);
    background:         linear-gradient(to bottom, #fff 0, #eee 100%);
}

/* not good */
.element {
    color: rgb(0, 0, 0);
    width: 50px;
    color: rgba(0, 0, 0, .5);
}

/* good */
.element {
    color: rgb(0, 0, 0);
    color: rgba(0, 0, 0, .5);
}
```

## 写在最后

### 1、css代码格式化

> css的代码格式化，能解决部分css代码规范，如代码缩进、空格、分号、换行、引号、颜色进制等。所以能解决的这些规范仅供参考。
