let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

alert(admin.fullName); // John Smith (*)

// setter がトリガします!
admin.fullName = "Alice Cooper"; // (**)

alert(admin.fullName); // Alice Cooper, admin の状態が変更されました。
alert(user.fullName); // John Smith, user の状態はそのままです。