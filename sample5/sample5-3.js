let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

// walk は prototype チェーンから取られました
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (rabbit から)