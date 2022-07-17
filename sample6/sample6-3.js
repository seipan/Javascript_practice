function makeClass(phrase) {
  // クラス定義とその返却
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}

// 新しいクラスを作成
let User = makeClass("Hello");

new User().sayHi(); // Hello