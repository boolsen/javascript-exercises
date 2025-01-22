const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  celsius = Math.round(celsius  * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * (1.8)) + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};

//convertToCelsius(32);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
