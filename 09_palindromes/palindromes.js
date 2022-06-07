const palindromes = function (str) {
  // this line take in the string that has been passed in as
  // argument, lower cases all the letters, and take out non-
  // alphanumeric characters.
  str = str.toLowerCase().replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let le = str.length;

  if (le === 0 || le === 1) {
    return true; 
  } else {
    if (str[0] === str [le - 1]) {
      return palindromes(str.slice(1, le - 1) );
    } else {
      return false;
    };
  }
};
// Do not edit below this line
module.exports = palindromes;
