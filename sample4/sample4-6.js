let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    alert("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x); // "this" は正しいものが渡されます
    cache.set(x, result);
    return result;
  };
}

worker.slow = cachingDecorator(worker.slow); // キャッシングします

alert( worker.slow(2) ); // 動作します
alert( worker.slow(2) ); // 動作します（キャッシュが使われます）