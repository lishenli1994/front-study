class Cash {
  constructor(money) { // 单位默认为：分/default unit: cent
    this.money = money;
  }

  valueOf() {
    return this.money;
  }

  add(cash) {
    return new Cash(this + cash); // cash默认调用valueOf()方法/cash to call valueOf
  }

  toString() {
    let money = this.money;
    let result;
    let yuan = Math.floor(money / 100);
    money -= yuan * 100;
    let jiao = Math.floor(money / 10);
    money -= jiao * 10;
    return `${yuan}元${jiao}角${money}分`;
  }
}

// test
let c1 = new Cash(77);
let c2 = new Cash(88);
let c3 = c1.add(c2);
console.log(c3.toString()); // 1元6角5分