const add = function(num1, num2) {
  return num1 + num2;	
};

const subtract = function(num1, num2) {
  return num1 - num2;	
};

const sum = function(numArr) {
  let total = 0;
  for (num of numArr) {
    total += num;
  }	
  return total;
};

const multiply = function(numArr) {
  let product;
  for (num of numArr) {
    if (typeof product === 'undefined') {
      product = num;
    }
    else {
      product *= num;
    }
  }	
  return product;
};

const power = function(num1, num2) {
  return num1 ** num2;	
};

const factorial = function(num) {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;	
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
