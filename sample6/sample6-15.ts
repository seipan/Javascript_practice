class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // 組み込みのメソッドは、これをコンストラクタとして使います
  static get [Symbol.species]() {
    return Array;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

// filter はコンストラクタとして arr.constructor[Symbol.species] を使って新しい配列を作ります
let filteredArr = arr.filter(item => item >= 10);

// filteredArr は PowerArray ではなく Array です
alert(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function