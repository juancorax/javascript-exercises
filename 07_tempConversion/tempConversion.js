const convertToCelsius = function (temperature) {
  let temperatureToCelsius = (temperature - 32) * (5 / 9);
  temperatureToCelsius = Math.round(temperatureToCelsius * 10) / 10;

  return temperatureToCelsius;
};

const convertToFahrenheit = function (temperature) {
  let temperatureToFahrenheit = temperature * (9 / 5) + 32;
  temperatureToFahrenheit = Math.round(temperatureToFahrenheit * 10) / 10;

  return temperatureToFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
