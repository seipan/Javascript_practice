let arr = [1, 2, 3];

let arrCopy = [...arr]; // 配列をパラメータのリストに展開します
                        // その後、結果を新しい配列に格納します

// 配列が同じコンテンツを持っているか？
alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// 配列は等価か？
alert(arr === arrCopy); // false (同じ参照ではないため)

// 最初の配列を修正しても、コピーは修正されません:
arr.push(4);
alert(arr); // 1, 2, 3, 4
alert(arrCopy); // 1, 2, 3