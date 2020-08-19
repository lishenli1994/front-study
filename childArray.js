Array.prototype.include = function (arr) {
  if (!Array.isArray(arr)) {
    throw new Error("is not array");
  }

  let originArrStr = this.toString();

  let flag = true;
  arr.forEach((i) => {
    if (originArrStr.indexOf(i) === -1) {
      flag = false;
      return;
    }
  });
  return flag;
};

// test
let a = [1, 2, 5, 7, 3];
let b = [1, 7, 2];
let c = [1, 9];

console.log(a.include(b)); // true
console.log(a.include(c)); // false
