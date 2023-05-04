const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(elementsToSum) {

  let sum = 0;
	for (const element of elementsToSum){
    sum +=  element;
  }
  return sum;
};

const multiply = function(elementsToMultiply) {

  let product = 1;
  for (const element of elementsToMultiply){
    product *= element;
  }
  return product;
};

const power = function(base, power) {
	return (base ** power);
};

const factorial = function(num) {

  if (num == 0) return 1;

  let result = 1;
	for (i = num; i>0; i--){
    result *= i;
  }
  return result;
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
