function Thermostat() {
  this.temp = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
  this.powerSavingMode = 'on'
};

Thermostat.prototype.up = function () {
  this.temp++
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
  if (this.powerSavingMode === 'on') {
    this.powerSavingMode = 'off'
  }
  else if (this.powerSavingMode === 'off') {
    this.powerSavingMode = 'on'
  }
};
