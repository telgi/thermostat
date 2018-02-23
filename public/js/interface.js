$(document).ready(function() {
  var thermostat = new Thermostat();

  $("#current-temp").text(thermostat.temp);

  $("#temp-up").click(function() {
    thermostat.up();
    $("#current-temp").text(thermostat.temp);
    thermostat.checkEnergyUsage();
    $("#energy-usage").text(thermostat.energyUsage);
  });

  $("#temp-down").click(function() {
    thermostat.down();
    $("#current-temp").text(thermostat.temp);
    thermostat.checkEnergyUsage();
    $("#energy-usage").text(thermostat.energyUsage);
  });

  $("#power-mode").click(function() {
    thermostat.setPowerSavingMode();
    if (thermostat.powerSavingMode === true) {
      $("#power-mode").text('On');
    } else {
      $("#power-mode").text('Off');
    }
  });

  $("#energy-usage").text(thermostat.energyUsage);
});
