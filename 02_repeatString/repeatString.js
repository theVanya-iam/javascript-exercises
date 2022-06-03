
const repeatString = function(str, num) {
    if (num < 0){
        return('ERROR');
    } else {
    let result = '';
    let i = 0;

    while (i < num){
        result = result + str;
        i++
    }

    return(result);
    }
};

console.log(repeatString('Meow', 3));



// Do not edit below this line
module.exports = repeatString;
