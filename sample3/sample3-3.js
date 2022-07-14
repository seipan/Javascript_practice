let arr = ["I", "study", "JavaScript"];

// インデックス 2 から
// 削除 0
// その後 "complex" と "language" を挿入
arr.splice(2, 0, "complex", "language");

alert( arr ); // "I", "study", "complex", "language", "JavaScript"