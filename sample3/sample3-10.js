// 📁 cache.js
let cache = new Map();

// 計算し結果を覚える
function process(obj) {
  if (!cache.has(obj)) {
    let result = obj /* に対する計算結果 */;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// ここで、別のファイルで process() を使用します。

// 📁 main.js
let obj = {/* オブジェクトがあるとします */};

let result1 = process(obj); // 計算します

// ...その後、別の場所で呼ばれるとします...
let result2 = process(obj); // キャッシュから取得した、記憶された結果が使われます

// ...後ほど、オブジェクトがこれ以上は不要になったとき
obj = null;

alert(cache.size); // 1 (なんと! オブジェクトは依然としてキャッシュされており、メモリを食っています!)