"use strict";
const temps = [5, 3, 12, 65, 78, "error", 99, 100];
const amplitudeTempCal = function (temp) {
  let max = temp[0];
  let min = temp[0];
  for (let i = 1; i < temp.length; i++) {
    if (temp[i] !== "number") {
      continue;
    }
    if (min > temp[i]) {
      min = temp[i];
    }
    if (max < temp[i]) {
      max = temp[i];
    }
  }
  return max - min;
};


const celciustoKelvin = function(){
    const measurement = {
        type:'temp',
        unit:'celcius',
        value:prompt('degree to celcius')
    }
    const kelvin  = Number(measurement.value) + 273;
    return kelvin;
}

console.log(celciustoKelvin());