const palindromes = function (string) {
  const arrayFromString = string.toLowerCase().split("");

  const charactersToExclude = ["!", " ", ",", "."];

  const filteredArray = arrayFromString.filter((item) => {
    for (let character of charactersToExclude) {
      if (item === character) {
        return false;
      }
    }
    return true;
  });

  if (filteredArray.join("") === filteredArray.reverse().join("")) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
