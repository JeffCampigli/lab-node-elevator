class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "";
  }

  start() {
    var interval = setInterval(() => {
      this.update();
    }, 1000);
  }

  stop() {
    clearInterval(interval);
  }

  update() {
    this.log(this.direction, this.floor);
  }

  _passengersEnter() {}
  _passengersLeave() {}
  floorUp() {
    this.floor === this.MAXFLOOR ? console.log("dernier etage") : this.floor++,
      (this.direction = "up");
  }
  floorDown() {
    this.floor === 0 ? console.log("Rez de Chausée") : this.floor--,
      (this.direction = "down");
  }
  call() {}
  log(direction, position) {
    console.log(`Direction: ${direction} | Floor: ${position}`);
  }
}

module.exports = Elevator;
