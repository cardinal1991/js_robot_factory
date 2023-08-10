'use strict';

class BaseRobot {
  constructor(name, weight, coords = { }, chipVersion) {
    this.name = name;
    this.weight = weight;

    this.coords = {
      x: coords.x !== undefined ? coords.x : 0,
      y: coords.y !== undefined ? coords.y : 0,
    };
    this.chipVersion = chipVersion;
  }

  goForward(step = 1) {
    this.coords.y += step;
  }

  goBack(step = 1) {
    this.coords.y -= step;
  }

  goRight(step = 1) {
    this.coords.x += step;
  }

  goLeft(step = 1) {
    this.coords.x -= step;
  }

  getInfo() {
    return `Robot: ${this.name},`
    + ` Chip version: ${this.chipVersion}, Weight: ${this.weight}`;
  }
}

class FlyingRobot extends BaseRobot {
  constructor(name, weight, coords = {}, chipVersion) {
    super(name, weight, coords, chipVersion);

    this.coords = {
      x: coords.x !== undefined ? coords.x : 0,
      y: coords.y !== undefined ? coords.y : 0,
      z: coords.z !== undefined ? coords.z : 0,
    };
    // super(weight);
    // super(coords);
    // super(chipVersion);
  }

  goUp(step = 1) {
    this.coords.z += step;
  }

  goDown(step = 1) {
    this.coords.z -= step;
  }
}

class DeliveryDrone extends FlyingRobot {
  constructor(name, weight, coords = {},
    chipVersion, maxLoadWeight, currentLoad = null) {
    super(name, weight, coords, chipVersion);

    this.coords = {
      x: coords.x !== undefined ? coords.x : 0,
      y: coords.y !== undefined ? coords.y : 0,
      z: coords.z !== undefined ? coords.z : 0,
    };

    this.maxLoadWeight = maxLoadWeight;
    this.currentLoad = currentLoad;
  }

  hookLoad(cargo) {
    this.cargo = cargo;

    if (this.currentLoad === null && this.cargo.weight <= this.maxLoadWeight) {
      this.currentLoad = this.cargo;
    }
  }

  unhookLoad() {
    this.currentLoad = null;
  }
}

module.exports = {
  BaseRobot,
  FlyingRobot,
  DeliveryDrone,
};
