const add = function(...nums) {
  let sum = 0;
  nums.forEach((num) => sum+=num);
  return sum;
};

const subtract = function(num1, num2) {
  return num1-num2;
};

const sum = function(nums) {
  if (nums === undefined || nums.length == 0) {
    return 0;
  }
  let sum = 0;
  nums.forEach((num) => sum+=num);
  return sum;
};

const multiply = function(...nums) {
  let product = 1;
  nums.forEach((num) => product*=num);
  return product;
};

const power = function(base, exponent) {
  return base**exponent;
};

const factorial = function(num) {
  let product = 1;
  for (let i = 1; i <= num; ++i){
    product*=i;
  }
  return product;
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
