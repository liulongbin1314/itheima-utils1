# 说明

## 安装

```
npm install itheima-utils1
```

## 导入

```js
const itheima = require('itheima-utils1')
```

## 格式化时间

```js
const dt = itheima.dateFormat(new Date())
// 输出 2020-01-20 10:47:32
console.log(dt)
```

## 转义 HTML 中的特殊字符

```js
// 待转换的 HTML 字符串
const htmlStr = '<h1 style="color: red;">你好！&copy;<span>小黄！</span></h1>'

// 调用 htmlEscape 进行转换
const str = itheima.htmlEscape(htmlStr)

// 输出 &lt;h1 style=&quot;color: red;&quot;&gt;你好！&amp;copy;&lt;span&gt;小黄！&lt;/span&gt;&lt;/h1&gt;
console.log(str)
```

## 还原 HTML 中的特殊字符

```js
const rawHTML = itheima.htmlUnEscape(str)

// 输出 <h1 style="color: red;">你好！&copy;<span>小黄！</span></h1>
console.log(rawHTML)
```

## 开源协议
ISC