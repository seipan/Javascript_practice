let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(() => user.sayHi(), 1000);

// ...1秒以内に次が行われると
user = {
  sayHi() { alert("Another user in setTimeout!"); }
};

// Another user in setTimeout?!?