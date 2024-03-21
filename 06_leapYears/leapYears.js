const leapYears = function (year) {
  let isLeapYear;

  if (
    (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) ||
    (year % 4 === 0 && year % 100 !== 0)
  ) {
    isLeapYear = true;
  } else {
    isLeapYear = false;
  }

  return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
