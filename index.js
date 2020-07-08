const returnFirstTwoDrivers = function(drivers) {
  const newArr = drivers.slice(0, 2)
  return newArr
}

const returnLastTwoDrivers = drivers => {
  const lastTwoDrivers = drivers.slice(-2)
  return lastTwoDrivers
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
  return function(){
    return num *= num
  }
}
 function fareDoubler(fare){
   return fare *= 2

 }
 function fareDoubler(fare){
   return fare *= 2

 }
 function fareTripler(fare){
   return fare *= 3
 }
function fetchSpecifiedDrivers(drivers, cb){
  return cb(drivers)
}
