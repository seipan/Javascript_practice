let animal = {
  name: "Animal",
  eat() {
    alert(this.name + " eats.");
  }
};

let rabbit = {
  __proto__: animal,
  name: "Rabbit",
  eat() {
    // これがおそらく super.eat() が動作する方法です
    this.__proto__.eat.call(this); // (*)
  }
};

rabbit.eat(); // Rabbit eats.