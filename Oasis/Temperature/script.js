function convert() {
    var inputTemp = parseFloat(document.getElementById("inputTemp").value);
    var tempType = document.getElementById("tempType").value;
    var result = document.getElementById("result");
  
    if (tempType === "celsius") {
      result.innerHTML = inputTemp + " Celsius = " + celsiusToFahrenheit(inputTemp) + " Fahrenheit";
    } else if (tempType === "fahrenheit") {
      result.innerHTML = inputTemp + " Fahrenheit = " + fahrenheitToCelsius(inputTemp) + " Celsius";
    } else if (tempType === "kelvin") {
      result.innerHTML = inputTemp + " Kelvin = " + kelvinToCelsius(inputTemp) + " Celsius";
    }
  }
  
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }
  