let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// 変数でアクセス
alert( user[key] ); // John ("name" が入力された場合)