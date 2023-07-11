const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(arr) {
	finalSum = arr.reduce((sum, current) => sum + current, 0);
  return finalSum;
};

const multiply = function(...numbers) {
  product = 1;
  numbers.forEach(number => {
    product *= number;
  })
  return product;
};

const power = function(base, exponent) {
  let answer = base;
  for (let i = 1; i < exponent; i++) {
    answer *= base;
  }
  return answer;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }
  let answer = num;
  for (let i = num - 1; i > 0; i--) {
    answer = answer * i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
