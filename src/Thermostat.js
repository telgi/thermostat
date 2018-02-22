function Thermostat() {
  this.temp = 20;
  this.minTemp = 10;
  this.powerSavingMode = true;
  this.maxTemp = 25;
};

Thermostat.prototype.up = function () {
  if(this.temp === this.maxTemp) {
    throw new Error("Already at maximum temperature")
  }
  else {
    this.temp++
  }
};

Thermostat.prototype.down = function () {
  if(this.temp === this.minTemp) {
    throw new Error("Already at minimum temperature")
  }
  else {
    this.temp--
  }
};

Thermostat.prototype.setPowerSavingMode = function() {
  this.powerSavingMode = !this.powerSavingMode
  this._setMaxTemp();
};

Thermostat.prototype._setMaxTemp = function () {
  if (this.powerSavingMode === true) {
    this.maxTemp = 25;
  }
  else {
    this.maxTemp = 32;
  }
};

Thermostat.prototype.resetTemp = function () {
  this.temp = 20;
};
