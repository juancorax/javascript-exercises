const removeFromArray = function (array, ...elementsToRemove) {
  for (let i = 0; i < elementsToRemove.length; i++) {
    let sameValueAmount = array.filter(
      (element) => element === elementsToRemove[i],
    ).length;

    for (let j = 1; j <= sameValueAmount; j++) {
      array.splice(array.indexOf(elementsToRemove[i]), 1);
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
