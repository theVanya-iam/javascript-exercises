const sumAll = function(numOne, numTwo) {
    let sum = 0;
    let LgNumber;
    let SmNumber;

    if (numOne < 0 || numTwo < 0 || typeof(numOne) != 'number' || typeof(numTwo) != 'number'){
        return('ERROR');
    } else if (numOne < numTwo){
        LgNumber = numTwo;
        SmNumber = numOne;
    } else {
        LgNumber = numOne;
        SmNumber = numTwo;
    }
    
    for (let i = 0; i < LgNumber; i++){
        sum = sum + SmNumber + i;
    }
    return(sum);
};

// Do not edit below this line
module.exports = sumAll;
