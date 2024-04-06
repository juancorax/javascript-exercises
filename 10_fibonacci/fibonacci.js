const fibonacci = function (fibonacciMember) {
  fibonacciMember = Number(fibonacciMember);

  if (fibonacciMember === 0) {
    return 0;
  } else if (fibonacciMember < 0) {
    return "OOPS";
  }

  let precedingNumber1 = 1;
  let precedingNumber2 = 0;

  for (let i = 2; i <= fibonacciMember; i++) {
    let currentNumber = precedingNumber1 + precedingNumber2;
    precedingNumber2 = precedingNumber1;
    precedingNumber1 = currentNumber;
  }

  return precedingNumber1;
};

// Do not edit below this line
module.exports = fibonacci;
