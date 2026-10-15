const convertToCelsius = function(temperature) {
  const formulaFtC = (temperature - 32) * (5/9)
  const roundedNumber = Math.round(formulaFtC * 10) / 10
  return roundedNumber
};

const convertToFahrenheit = function(temperature) {
  const formulaCtF = (temperature * 9/5) + 32
  const roundedNumber = Math.round(formulaCtF * 10) / 10
  return roundedNumber
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
