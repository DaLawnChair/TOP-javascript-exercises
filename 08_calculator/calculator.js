const add = function() {
	const numbers = Array.from(arguments);
  return numbers.reduce((total,number)=> {
    return total + number;
  },0)
};

const subtract = function() {
  const numbers = Array.from(arguments);
  let total = numbers[0];
  for(let i=1;i<numbers.length;i++)
  {
    total -= numbers[i];
  }
  return total;
};

const sum = function(numbers) {
  return numbers.reduce((total,number)=> {
    return total + number;
  },0)
};

const multiply = function(numbers) {
  return numbers.reduce((total,number)=> {
    return total * number;
  },1)

};

const power = function(a,b) {
  if(b==0)
  {
      return 1;
  }
  let total = a;
  for(let i=1;i<b;i++)
  {
    total = total * a;
  }
  return total;
};

const factorial = function(num) 
{
  let total = 1;
	for(let i = 1; i<=num; i++)
  {
    total = total * i;
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
