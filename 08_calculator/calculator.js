const add = function(num1, num2) {
  const result = num1+ num2;
  return result;
};

const subtract = function(num1, num2) {
  const result = num1 - num2;
  return(result);
};

const sum = function(userArr) {
    let result = 0;

    for (let i = 0; i < userArr.length; i++){
      if (userArr.length === 0){
        userArr[i] = 0;
      }
        result = parseInt(userArr[i]) + result;
    }

    return(result);
};

const multiply = function(userArr) {
  let result = 1;

 for (let i = 0; i < userArr.length; i++){
   result = userArr[i] * result;
 }
 return(result);
};

const power = function(a,b) {
	let result = 1;
  for (let i = 0; b > 0; i++){
    result = a * result;
    b = b - 1;
  }
  return(result);
};

const factorial = function(a) {
	let result = 1;
    if (a === 0 || a === 1){
      return(1);
    } else { 
        let i = 1;
        result = a;
        for (let i = 1; i < a; i++){
          result = result * (a-i);
        }
      }
    return(result);
};

// result = 2 * (2 - 1)
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
