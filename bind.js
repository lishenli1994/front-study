function func(x, y) {
  return 'x: ' + x + ' y: ' + y;
}

Function.prototype._bind = function() {
  if (typeof this !== 'function') {
    throw new Error('not a function');
  }

  const that = this; // that equals func

  return function() {
    const params = Array.prototype.slice.call(arguments); // [ 1, 2 ]
    return that.apply(null, params); // 下面写法一样
    // return that.call(null, ...params); 
  }
}

Function.prototype._bind2 = function() {
  if (typeof this !== 'function') {
    throw new Error('not a function');
  }

  const that = this; // that equals func
  const param1 = Array.prototype.slice.call(arguments, 0, 1); // [ 1 ]

  return function() {
    const param2 = Array.prototype.slice.call(arguments); // [ 2 ]
    // return that.apply(null, param1.concat(param2)); // 下面写法一样
    return that.call(null, ...param1.concat(param2)); 
  }
}

// _bind() 和 _bind2()区别在于func._bind调用过程生成的函数是否传参，第一个不传，第二个传一个参数

console.log(func._bind()(1, 2));
console.log(func._bind2(1)(2));