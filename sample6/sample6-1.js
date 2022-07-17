class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// class は function
alert(typeof User); // function

// ...あるいは, より正確には User は constructor メソッド
alert(User === User.prototype.constructor); // true

// メソッドは User.prototype にあります e.g:
alert(User.prototype.sayHi); // sayHi メソッドのコード

// prototype には正確には2つのメソッドがあります
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi