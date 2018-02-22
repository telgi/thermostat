'use strict';

describe('Thermostat', function() {
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('it starts at 20 degrees', function() {
    expect(thermostat.temp).toEqual(20);
  });

  it('has a minimum temp of 10', function() {
    expect(thermostat.minTemp).toEqual(10)
  });

  it('has a max temp of 25 if powerSavingMode is on', function() {
    thermostat.powerSavingMode = true
    thermostat._setMaxTemp();
    expect(thermostat.maxTemp).toEqual(25)
  });

  it('has a max temp of 32 if powerSavingMode is off', function() {
    thermostat.powerSavingMode = false
    thermostat._setMaxTemp();
    expect(thermostat.maxTemp).toEqual(32)
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.powerSavingMode).toEqual(true)
  });

  describe('up', function() {
    it('increases temperature by 1', function() {
      thermostat.up();
      expect(thermostat.temp).toEqual(21);
    });

    it('throws error if max temp has been reached on power saving mode', function() {
      thermostat.powerSavingMode = true
      thermostat.temp = 25
      expect(function() {thermostat.up()}).toThrowError("Already at maximum temperature")
    });

    it('throws error if max temp has been reached not on power saving mode', function() {
      thermostat.powerSavingMode = false
      thermostat.temp = 32
      thermostat.maxTemp = 32
      expect(function() {thermostat.up()}).toThrowError("Already at maximum temperature")
    });
  });

  describe('down', function() {
    it('decreases temperature by 1', function() {
      thermostat.down();
      expect(thermostat.temp).toEqual(19);
    });

    it ('throws an error if min temp has been reached', function() {
      thermostat.temp = thermostat.minTemp
      expect(function() {thermostat.down()}).toThrowError("Already at minimum temperature");
    })
  });

  describe('setPowerSavingMode', function() {
    it('switches powerSavingMode between on and off', function() {
      thermostat.powerSavingMode = true
      thermostat.setPowerSavingMode();
      expect(thermostat.powerSavingMode).toEqual(false)
    });

    it('changes max temp', function() {
      thermostat.powerSavingMode = true
      thermostat.setPowerSavingMode();
      expect(thermostat.maxTemp).toEqual(32);
    });
  });

  describe('reset', function() {
    it('resets temperature to 20 degrees', function() {
      thermostat.temp = 23;
      thermostat.resetTemp();
      expect(thermostat.temp).toEqual(20);
    });
  });
});
