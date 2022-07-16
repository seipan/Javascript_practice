let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj }; // オブジェクトをパラメータのリストに展開します
                          // その後、結果を新しいオブジェクトに結果を返します

// オブジェクトは同じコンテンツを持っているか？
alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// オブジェクトは等価か？
alert(obj === objCopy); // false (同じ参照ではありません))

// 最初のオブジェクトを修正しても、コピーは修正されません:
obj.d = 4;
alert(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}