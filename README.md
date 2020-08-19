# front-study
# 最近面试了阿里的前端，问了几个问题都没答上来，有感而发，想写一个blog，记录平时遇到的问题，希望对各位小伙伴有所帮助

## 阿里面试题

### 1 实现一个Cash，满足如下
```js
// 写一个Cash的实现
let c1 = new Cash(77);
let c2 = new Cash(88);
let c3 = c1.add(c2);
console.log(c3.toString()); // 1元6角5分
// 答案见 cash.js
```
### 2 实现一个_bind(),满足如下
```js
function func(x, y) {
  return 'x: ' + x + ' y: ' + y;
}

console.log(func._bind()(1, 2)); // x: 1 y: 2
// 答案见 bind.js
```

### 3 怎么判断一个一位数组存在子集
```js
let a = [1,2,5,7,3];
let b = [1,7,2];
let flag = a.include(b); // true
// 答案见 childArray.js
```