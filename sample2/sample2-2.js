let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // "admin" の参照で変更されました

alert(user.name); // 'Pete', "user" の参照からも変更が確認できます