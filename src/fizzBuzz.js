const fizzBuzz = function(num) {
  if (divisibleBy(num, 15)) {
    return 'FizzBuzz';
  } else if (divisibleBy(num, 3)) {
    return 'Fizz';
  } else if (divisibleBy(num, 5)) {
    return 'Buzz';
  } else {
    return `${num}`;
  }
};

const divisibleBy = function(dividend, divisor) {
  return dividend % divisor === 0;
};

module.exports = fizzBuzz;
