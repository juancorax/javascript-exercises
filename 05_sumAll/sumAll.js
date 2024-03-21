const sumAll = function (firstInteger, secondInteger) {
  if (
    firstInteger < 0 ||
    secondInteger < 0 ||
    typeof firstInteger !== "number" ||
    typeof secondInteger !== "number"
  ) {
    return "ERROR";
  } else if (firstInteger > secondInteger) {
    let firstIntegerBackup = firstInteger;
    firstInteger = secondInteger;
    secondInteger = firstIntegerBackup;
  }

  let finalSum = 0;

  for (let i = firstInteger; i <= secondInteger; i++) {
    finalSum += i;
  }

  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
