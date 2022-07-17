let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // (*)

// 今、rabbit で両方のプロパティを見つけることができます:
alert( rabbit.eats ); // true (**)
alert( rabbit.jumps ); // true