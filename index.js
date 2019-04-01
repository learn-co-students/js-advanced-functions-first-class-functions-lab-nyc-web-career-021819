// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(drivers.length - 2);
}

const selectingDrivers = [returnFirstTwoDrivers,
  returnLastTwoDrivers
]

const createFareMultiplier = function (value) {
  return function (fare) {
    return fare * value
  };
};
function fareDoubler(num) {
  return num * 2;
}

function fareTripler(num) {
  return num * 3
}

function fetchSpecifiedDrivers(arrayOfDrivers, fn) {
  return fn(arrayOfDrivers);
}
