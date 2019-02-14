---
prev: ../../name/
next: ../../code/css/
---

# HTML规范

![front-end-develop-standard03.jpg](../../images/front-end-develop-standard03.jpg)

## 最佳原则

坚持制定好的代码规范。

无论团队人数多少，代码应该同出一门。

如果你想要为这个规范做贡献或觉得有不合理的地方，请访问[New Issue](https://github.com/niceboybao/front-end-develop-standard/issues)。

## 基本语法

- 缩进使用soft tab（推荐4个空格），总之缩进统一即可；
- 嵌套的节点应该缩进(4个空格）)；
- 在属性上，使用`" "`，不要使用`' '`；
- 属性名全小写，用中划线做分隔符；
- 不要在自动闭合标签结尾处使用斜线（HTML5 规范 指出他们是可选的）；
- 不要忽略可选的关闭标签，例：`</li>` 和 `</body>`。
- 在页面开头使用这个简单地doctype来启用标准模式，使其在每个浏览器中尽可能一致的展现；

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page title</title>
    </head>
    <body>
        <img src="images/company_logo.png" alt="Company">
        <h1 class="hello-world">Hello, world!</h1>
    </body>
</html>
```

## 基本属性

> 根据HTML5规范：应在html标签上加上lang属性。这会给语音工具和翻译工具帮助，告诉它们应当怎么去发音和翻译。

> 字符编码：通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定为'UTF-8'。

> IE兼容模式：用 `<meta>` 标签可以指定页面应该用什么版本的IE来渲染；

> viewport：一般用来定义浏览器窗口内容区的大小，不包含工具条、选项卡等内容；特别是最H5移动端适配建议加上。

```html
<!DOCTYPE html>
<html lang="en-us">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    </head>
</html>
```

## 引入CSS, JS

根据HTML5规范, 通常在引入CSS和JS时不需要指明 type，因为 `text/css` 和 `text/javascript` 分别是他们的默认值。

```html
<!-- External CSS -->
<link rel="stylesheet" href="code_guide.css">

<!-- In-document CSS -->
<style>

</style>

<!-- External JS -->
<script src="code_guide.js"></script>

<!-- In-document JS -->
<script>

</script>
```

## 属性顺序

属性应该按照特定的顺序出现以保证易读性（如下属性从前往后）；

- class
- id
- name
- data-*
- src, for, type, href, value , max-length, max, min, pattern
- placeholder, title, alt
- aria-*, role
- required, readonly, disabled

> class是为高可复用组件设计的，所以应处在第一位；

> id更加具体且应该尽量少使用，所以将它放在第二位。

```html
<a class="..." id="..." data-modal="toggle" href="#">Example link</a>

<input class="form-control" type="text">

<img src="..." alt="...">
```

## 布尔值属性

boolean属性指不需要声明取值的属性，XHTML需要每个属性声明取值，但是HTML5并不需要；boolean属性的存在表示取值为true，不存在则表示取值为false。

```html
<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
    <option value="1" selected>1</option>
</select>
```

## 标签操作

### 1、JS生成标签

在JS文件中生成标签让内容变得更难查找，更难编辑，性能更差。应该尽量避免这种情况的出现。

### 2、减少标签数量

在编写HTML代码时，需要尽量避免多余的父节点；很多时候，需要通过迭代和重构来使HTML变得更少。

```html
<!-- Not well -->
<span class="avatar">
    <img src="...">
</span>

<!-- Better -->
<img class="avatar" src="...">
```

### 3、标签语义化

> 没有 CSS 的 HTML 是一个语义系统而不是 UI 系统。

通常情况下，每个标签都是有语义的，所谓语义就是你的衣服分为外套， 裤子，裙子，内裤等，各自有对应的功能和含义。所以你总不能把内裤套在脖子上吧。此外语义化的 HTML 结构，有助于机器（搜索引擎）理解，另一方面多人协作时，能迅速了解开发者意图。不要页面上只有 `div` 和 `span`。

## 写在最后

### 1、结构、样式、行为分离

尽量确保文档和模板只包含 HTML 结构，样式都放到样式表里，行为都放到脚本里。

### 2、实用高于完美

> 尽量遵循HTML标准和语义，但是不应该以浪费实用性作为代价；任何时候都要用尽量小的复杂度和尽量少的标签来解决问题。

### 3、html代码格式化

> html的代码格式化，能解决部分html代码规范，如缩进、空格、标签对称等。所以能解决的这些规范仅供参考。
