'use strict';

describe('Thermostat', function() {
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('it starts at 20 degrees', function() {
    expect(thermostat.temp).toEqual(20);
  });

  describe('up', function() {
    it('increases temperature by 1', function() {
      thermostat.up();
      expect(thermostat.temp).toEqual(21);
    });
  });

  describe('down', function() {
    it('decreases temperature by 1', function() {
      thermostat.down();
      expect(thermostat.temp).toEqual(19);
    });
  });
});
