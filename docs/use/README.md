---
prev: ../code/javascript/
next: ../about/
editLink: true
---

# 项目应用

![front-end-develop-standard07.jpg](../images/front-end-develop-standard07.jpg)

## 忧虑

你是不是总是在抱怨项目组的各方面不统一，不好维护，千奇百怪？

你是不是每次提交代码的时候总要拉某某人过来看下各种冲突？

你是不是每次merge代码的时候总要话很长的时间去解决不同格式的代码冲突？

你是不是有时候为了解决一个bug好几天没睡好，最终定位的问题也许是一个分号、或是书写规范？ 人人都在恐慌，人人都在责怪他人，但殊不知，换了好几个项目都是类似，想过为什么吗？

## 分析现状

在实际的项目开发过程中，每一位开发者不可能完全按照前端开发的规范来。前面规范手册里面就有说过，前端开发规范固然重要，但是不应该以浪费`实用性`或者`大量开发时间`作为代价；有的时候公司也不会给你那么多时间和精力做项目开发规范，毕竟很多老板认为最快时间把产品做出来才是真理。所以，这就是有些开发者虽然知道这些大厂的规范，但是很难落实的原因！

## 如何解决

### 1、前期做好约束

工程代码前期的框框架架很重要，很大一部分决定了工程后期迭代和维护的标准，雷同的多，参考的也就多了。

> 如像一些工程目录命名规范，只需要工程架构的人在前期做好约束，严格按照一套规范来，后面迭代过程中，开发者自然按你的格式命名，不必太过在意；

> 如像ng、vue或者react项目开发过程中，开发组长提前写好demo组件，并要求组员就此做规范，也是能快速规范工程的有效方法之一；

> 代码注释的规范及其重要，很大程度的影响工程的维护成本。所以注释规范需做好，如场景判断`if(a>10)` 应写注释，能让维护者知道10代表什么；

### 2、统一才是最好的规范

规范中类似html的基本语法 如加上`DOCTYPE`、E兼容模式和视网膜模式、标签缩进4格、属性使用`" "`等等，我们都不必太过在意，因为很多编辑器的插件都支持一键生成，项目组内部只需统一`一键生成的插件即可`，项目组内部对于html的规范重点是`标签语义化`、`如何减少标签的嵌套`等。

同理可得，对于css、js，或者是根据你所做项目而定的ts、jsx、tsx等等的文件，都可以内项目组内部制定一套统一的格式刷插件。比如我的react项目组就统一使用VS Code的2款格式刷插件

[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) ： 代码格式化插件，主要针对工程中的JavaScript / TypeScript / CSS

[Prettier Now](https://marketplace.visualstudio.com/items?itemName=remimarsal.prettier-now) ： 支持语言比较全面的代码格式化插件，主要是支持jsx /tsx ，还有sass / less等

在比如，我们项目组内部还统一规范了代码缩进和文件头，规范代码缩进是为了提交或merge代码的时候能提高效率，加文件header和最近修改记录能快速定位问题和处理问题的人。需要了解更多VS COde项目实战内容[请参考](https://juejin.im/post/5b123ace6fb9a01e6f560a4b)

```javascript
{
    // 设置格式化缩进4格
    "prettier.tabWidth": 4,
    "vetur.format.defaultFormatter.html": "prettier",
    // 创建和更新代码的头部信息作者
    "fileheader.Author": "guangwei.bao",
    "fileheader.LastModifiedBy": "guangwei.bao",
}
```

这时候有的人会说，其实XXX插件比你的这2个还好。说实话，一点问题都没有。但是，我这里强调的不是插件的好坏，我强调的是`统一`二字。

## 写给我的项目组

前端项目组推荐使用VS Code编辑器，很轻量级，也挺好上手！不熟悉的可参考我整理文档（都给你们准备好了）[请参考强大的VS Code]((https://juejin.im/post/5b123ace6fb9a01e6f560a4b))

### 1、统一格式刷插件

[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) ： 代码格式化插件，主要针对工程中的JavaScript / TypeScript / CSS

[Prettier Now](https://marketplace.visualstudio.com/items?itemName=remimarsal.prettier-now) ： 支持语言比较全面的代码格式化插件，主要是支持jsx /tsx ，还有sass / less等

> react项目、js原生项目有这2款插件就够了，其他工程的仅供参考。老项目维护前先格式化一遍，再开始维护；代码提交之前一定要格式化一遍(最好吧格式化快捷键当 `control + s`按)。规范了格式刷，实际项目中能省不少麻烦，没有用VS Code的请自行研究编辑器格式化插件。

### 2、更好的管理代码

- 代码统一缩进4格；

> 统一缩进能给代码提交、分支合并等减少很多麻烦

```javascript
{
  // 设置格式化缩进4格
  "prettier.tabWidth": 4,
  "vetur.format.defaultFormatter.html": "prettier"
}
```

- 每个文件头部生成如下信息(文件创建者和最后修改者、及相关时间)[强大的VS Code]((https://juejin.im/post/5b123ace6fb9a01e6f560a4b))中有插件介绍,插件名称： `fileheader`。

> 这样做的好处是能很清楚每个文件的创建者、修改者，遇到问题或者代码交接能很快定位到人，记得每个文件Describe一下说明文件用意！如下：

```javascript
  // 头部信息
  /*
  * @Author: guangwei.bao
  * @Date: 2018-10-08 10:34:37
  * @Last Modified by: guangwei.bao
  * @Last Modified time: 2018-11-21 10:23:58
  * @Describe: 付款页面
  */

  // settings
  {
    // 设置格式化缩进4格
    "prettier.tabWidth": 4,
    "vetur.format.defaultFormatter.html": "prettier"
  }
```

- git代码管理

> 下载好用的git代码管理插件，下拉代码对比一下，merge代码对比一下，代码提交前对比一下。

### 3、如何安装插件

一般情况下直接在VS Code里面搜索到对应的插件下载即可，但我的项目组有自己的开发云桌面，访问不了外网，这种情况下插件安装就只能用`离线安装` 或者 `有网安装再拷贝了`，离线安装请自行百度或者google[安装教程](https://www.cnblogs.com/majianguo/p/6561147.html)。

这里推荐`本地安装好再拷贝到云桌面`，本地安装好的自定义插件路径如下(默认安装路径，自己有手动修改的按修改后的查找)

```javascript
  // windows系统
  C:\Users\用户名\.vscode\extensions
  // mac os系统
  /Users/用户名/.vscode/extensions
```

VS Code自定义插件都在 `.vscode` 隐藏路径的 `extensions` 文件夹下面，本地安装好后把 `extensions` 文件夹拷贝到云桌面相应路径，然后重启编辑器即可。
