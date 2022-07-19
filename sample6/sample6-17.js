let sayMixin = {
  say(phrase) {
    alert(phrase);
  }
};

let sayHiMixin = {
  __proto__: sayMixin, // (またはここで prototype を設定するのに Object.create が使えます)

  sayHi() {
    // 親のメソッド呼び出し
    super.say("Hello " + this.name); // (*)
  },
  sayBye() {
    super.say("Bye " + this.name); // (*)
  }
};

class User {
  constructor(name) {
    this.name = name;
  }
}

// メソッドをコピー
Object.assign(User.prototype, sayHiMixin);

// これで User は sayHi できます
new User("Dude").sayHi(); // Hello Dude!