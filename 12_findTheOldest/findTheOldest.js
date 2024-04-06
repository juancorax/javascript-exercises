const findTheOldest = function (array) {
  return array.reduce((oldest, current) => {
    let currentAge;
    let oldestAge;

    if ("yearOfDeath" in current) {
      currentAge = current.yearOfDeath - current.yearOfBirth;
    } else {
      const currentYear = new Date().getFullYear();
      currentAge = currentYear - current.yearOfBirth;
    }

    if ("yearOfDeath" in oldest) {
      oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    } else {
      const currentYear = new Date().getFullYear();
      oldestAge = currentYear - oldest.yearOfBirth;
    }

    if (currentAge > oldestAge) {
      return current;
    }
    return oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
