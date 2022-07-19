class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }
}

// コーヒーメーカーを生成
let coffeeMachine = new CoffeeMachine(100);

// 水を追加
coffeeMachine.waterAmount = -10; // _waterAmount は -10 ではなく、 0 になります