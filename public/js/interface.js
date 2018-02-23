$(document).ready(function() {
  var thermostat = new Thermostat();

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#city-temp').text(data.main.temp);
    })
  }

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  $("#home-temp").text(thermostat.temp);

  $("#temp-up").click(function() {
    thermostat.up();
    $("#home-temp").text(thermostat.temp);
    thermostat.checkEnergyUsage();
    $("#energy-usage").text(thermostat.energyUsage);
  });

  $("#temp-down").click(function() {
    thermostat.down();
    $("#home-temp").text(thermostat.temp);
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
