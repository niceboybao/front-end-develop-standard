---
prev: ../../code/javascript/
next: ../../code/react/
---

# ECMAScript 6 规范

![front-end-develop-standard06-1.jpg](../../images/front-end-develop-standard06-1.jpg)

## 最佳原则

坚持制定好的代码规范。

无论团队人数多少，代码应该同出一门。

如果你想要为这个规范做贡献或觉得有不合理的地方，请访问[New Issue](https://github.com/niceboybao/front-end-develop-standard/issues)。

## ES6 基本规范

### 1、引用

- 对所有的引用使用 const ；不要使用 var；

  > 为什么？这能确保你无法对引用重新赋值，也不会导致出现 bug 或难以理解。

```javascript
// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;
```

- 如果你一定需要可变动的引用，使用 let 代替 var；

  > 为什么？因为 let 是块级作用域，而 var 是函数作用域。

```javascript
// bad
var count = 1;
if (true) {
  count += 1;
}

// good, use the let.
let count = 1;
if (true) {
  count += 1;
}
```

- 注意 let 和 const 都是块级作用域；

```javascript
// const 和 let 只存在于它们被定义的区块内。
{
  let a = 1;
  const b = 1;
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError
```

### 2、对象

- 使用字面值创建对象；

```javascript
// bad
const item = new Object();

// good
const item = {};
```

- 使用对象方法的简写；

```javascript
// bad
const atom = {
  value: 1,

  addValue: function (value) {
    return atom.value + value;
  },
};

// good
const atom = {
  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};
```

- 使用对象属性值的简写；

```javascript
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// good
const obj = {
  lukeSkywalker,
};
```

### 3、数组

- 使用字面值创建数组；

```javascript
// bad
const items = new Array();

// good
const items = [];
```

- 向数组添加元素时使用 Arrary#push 替代直接赋值；

```javascript
const someStack = [];


// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');
```

- 使用拓展运算符 ... 复制数组；

```javascript
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```

- 使用 Array#from 把一个类数组对象转换成数组；

```javascript
const foo = document.querySelectorAll('.foo');
const nodes = Array.from(foo);
```

### 4、解构

- 使用解构存取和使用多属性对象；

```javascript
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(obj) {
  const { firstName, lastName } = obj;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```

- 对数组使用解构赋值；

```javascript
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```

### 5、Strings字符处理

程序化生成字符串时，使用模板字符串代替字符串连接。

```javascript
// bad
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

// bad
function sayHi(name) {
  return ['How are you, ', name, '?'].join();
}

// good
function sayHi(name) {
  return `How are you, ${name}?`;
}
```

### 6、箭头函数

当你必须使用函数表达式（或传递一个匿名函数）时，使用箭头函数符号。

> 为什么？因为箭头函数创造了新的一个 this 执行环境，通常情况下都能满足你的需求，而且这样的写法更为简洁。

> 什么时候不使用？如果你有一个相当复杂的函数，你或许可以把逻辑部分转移到一个函数声明上。

```javascript
// bad
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
```

如果一个函数适合用一行写出并且只有一个参数，那就把花括号、圆括号和 return 都省略掉。如果不是，那就不要省略。

> 语法糖。在链式调用中可读性很高。

> 什么时候不使用？当你打算回传一个对象的时候。

```javascript
// good
[1, 2, 3].map(x => x * x);

// good
[1, 2, 3].reduce((total, n) => {
  return total + n;
}, 0);
```

### 7、构造器

- 使用 class。避免直接操作 prototype；

```javascript
// bad
function Queue(contents = []) {
  this._queue = [...contents];
}
Queue.prototype.pop = function() {
  const value = this._queue[0];
  this._queue.splice(0, 1);
  return value;
}


// good
class Queue {
  constructor(contents = []) {
    this._queue = [...contents];
  }
  pop() {
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
  }
}
```

- 用 extends 继承。extends 是一个内建的原型继承方法并且不会破坏 instanceof；

```javascript
// bad
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function() {
  return this._queue[0];
}

// good
class PeekableQueue extends Queue {
  peek() {
    return this._queue[0];
  }
}
```

- 方法可以返回 this 来帮助链式调用；

```javascript
// bad
Jedi.prototype.jump = function() {
  this.jumping = true;
  return true;
};

Jedi.prototype.setHeight = function(height) {
  this.height = height;
};

const luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20); // => undefined

// good
class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();

luke.jump()
  .setHeight(20);
```

### 8、函数参数

- 不要使用 arguments。可以选择 rest 语法 ... 替代；

```javascript
// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

// good
function concatenateAll(...args) {
  return args.join('');
}
```

- 直接给函数的参数指定默认值，不要使用一个变化的函数参数；

```javascript
// really bad
function handleThings(opts) {
  // 不！我们不应该改变函数参数。
  // 更加糟糕: 如果参数 opts 是 false 的话，它就会被设定为一个对象。
  // 但这样的写法会造成一些 Bugs。
  //（译注：例如当 opts 被赋值为空字符串，opts 仍然会被下一行代码设定为一个空对象。）
  opts = opts || {};
  // ...
}

// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}
```

### 9、迭代器

不要使用 iterators。使用高阶函数例如 map() 和 reduce() 替代 for-of；

```javascript
const numbers = [1, 2, 3, 4, 5];

// bad
let sum = 0;
for (let num of numbers) {
  sum += num;
}

sum === 15;

// good
let sum = 0;
numbers.forEach((num) => sum += num);
sum === 15;

// best (use the functional force)
const sum = numbers.reduce((total, num) => total + num, 0);
sum === 15;
```

### 10、模块

- 使用模组 (import/export) 而不是其他非标准模块系统。你可以编译为你喜欢的模块系统；

> 为什么？模块就是未来，让我们开始迈向未来吧。

```javascript
// bad
const AirbnbStyleGuide = require('./AirbnbStyleGuide');
module.exports = AirbnbStyleGuide.es6;

// ok
import AirbnbStyleGuide from './AirbnbStyleGuide';
export default AirbnbStyleGuide.es6;

// best
import { es6 } from './AirbnbStyleGuide';
export default es6;
```

- 不要使用通配符 import；

> 为什么？这样能确保你只有一个默认 export。

```javascript
// bad
import * as AirbnbStyleGuide from './AirbnbStyleGuide';

// good
import AirbnbStyleGuide from './AirbnbStyleGuide';
```

- 不要从 import 中直接 export。

> 为什么？虽然一行代码简洁明了，但让 import 和 export 各司其职让事情能保持一致。

```javascript
// bad
// filename es6.js
export { es6 as default } from './airbnbStyleGuide';

// good
// filename es6.js
import { es6 } from './AirbnbStyleGuide';
export default es6;
```

## 写在最后

### 1、JavaScript代码格式化

> JavaScript的代码格式化，能解决部分JavaScript代码规范，如代码缩进、空格、分号、换行、引号、大小括号间隔对称等。所以能解决的这些规范仅供参考。
