// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
  newArr = drivers.slice(0,2)
  return newArr
}

const returnLastTwoDrivers = function (drivers){
  newArr = drivers.slice(-2)
  return newArr
}
selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    return function(fare){
      return fare * num
    }
}
function fareDoubler(num){
  sum = num * 2
  return sum
}

function fareTripler(num){
  sum = num * 3
  return sum
}

function fetchSpecifiedDrivers(arrayOfDrivers, fn){
  return fn(arrayOfDrivers)
}
