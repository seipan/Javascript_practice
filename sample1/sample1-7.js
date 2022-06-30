function showMessage() {
  let message = "Hello, I'm JavaScript!"; // ローカル変数

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

function showMessage2(from, text) {

    from = '*' + from + '*'; // "from" をより良く見せる
  
    alert( from + ': ' + text );
  }
  
  let from = "Ann";
  
  showMessage2(from, "Hello"); // *Ann*: Hello
  
  // "from" の値は同じで、関数はローカルコピーを変更しています。
  alert( from ); // Ann