// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
  return arr.slice(0, 2)
}

const returnLastTwoDrivers = function(arr) {
  return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num) {
  return function(fare) {
    return fare * num
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = function(array, fn) {
  return fn(array)
}
