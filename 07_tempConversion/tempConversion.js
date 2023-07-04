// C = (F − 32) × 5 / 9
const convertToCelsius = function(tempF) {
  return round1Digit((tempF-32) * 5 / 9);
};

// F = (C * 9 / 5) + 32
const convertToFahrenheit = function(tempC) {
  return round1Digit((tempC * 9 / 5) + 32);
  
};

function round1Digit(number) {
  return Math.round(number*10)/10;
}


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
