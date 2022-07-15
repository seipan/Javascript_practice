let start = new Date(); // 計測開始

// なにかする
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // 終了

alert( `The loop took ${end - start} ms` );