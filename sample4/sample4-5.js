function slow(x) {
  // CPUを大量に消費するジョブがここにある可能性があります
  alert(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) { // 結果が map にあれば
      return cache.get(x); // それを返します
    }

    let result = func(x); // なければ func を呼び

    cache.set(x, result); // 結果をキャッシュ(覚える)します
    return result;
  };
}

slow = cachingDecorator(slow);

alert( slow(1) ); // slow(1) はキャッシュされました
alert( "Again: " + slow(1) ); // 同じ

alert( slow(2) ); // slow(2) はキャッシュされました
alert( "Again: " + slow(2) ); // 前の行と同じ