// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  const newArr = [...drivers];
  const first2 = [newArr[0], newArr[1]];
  return first2;
};

const returnLastTwoDrivers = function (drivers) {
  const newArr = [...drivers];
  const last2 = [newArr[newArr.length - 2], newArr[newArr.length -1]]
  return last2;
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function (multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};
