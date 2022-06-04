const ftoc = function(num) {
  let result = Math.round( ((num - 32) * 5/9) * 10 ) / 10;
  return(result);
};

const ctof = function(num) {
  let result = Math.round( ((num * 9/5) + 32) * 10 ) / 10;
  return(result);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
