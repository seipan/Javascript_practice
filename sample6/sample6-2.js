// 純粋な関数で User クラスを書き換え

// 1. constructor 関数を作成
function User(name) {
  this.name = name;
}
// 関数 prototype は "constructor" プロパティをデフォルトで持ちます
// なので、作成は不要です

// 2. prototype へメソッドを追加
User.prototype.sayHi = function() {
  alert(this.name);
};

// 使い方:
let user = new User("John");
user.sayHi();