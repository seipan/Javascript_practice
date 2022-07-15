let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John が訪問
visitedSet.add(pete); // 次に Pete
visitedSet.add(john); // John 再び

// visitedSet は 2 ユーザいます

// John が訪問したかどうかをチェック
alert(visitedSet.has(john)); // true

// Mary が訪問したかをチェック
alert(visitedSet.has(mary)); // false

john = null;

// visitedSet は自動的にクリーンアップされます。