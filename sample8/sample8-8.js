new Promise(function(resolve, reject) {

  throw new Error("Whoops!");

}).catch(function(error) { // (*)

  if (error instanceof URIError) {
    // エラー処理
  } else {
    alert("Can't handle such error");

    throw error; // ここで投げられたエラーは次の catch へジャンプします
  }

}).then(function() {
  /* 実行されません */
}).catch(error => { // (**)

  alert(`The unknown error has occurred: ${error}`);
  // 何も返しません => 実行は通常通りに進みます

});