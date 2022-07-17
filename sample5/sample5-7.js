let animal = {
  eats: true
};

// animal をプロトタイプとして新しいオブジェクトを作成する
let rabbit = Object.create(animal);

alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal); // rabbit のプロトタイプを取得

Object.setPrototypeOf(rabbit, {}); // rabbit のプロトタイプを {} に変更