const caesar = function(userString, shiftFactor){
    let shiftString = Array.from(userString).map(char => char.charCodeAt(0));
    for (let i=0; i < shiftString.length; i++){
        let distance;
        if (shiftString[i] >= 65 && shiftString[i] <= 90){  // if the letter is uppercase
            shiftFactor = shiftFactor % 26;
            if (shiftFactor > 0){
                distance = 90 - shiftString[i];
                if (shiftFactor > distance){
                 shiftString[i] = 65 + (shiftFactor - distance) - 1;
                } else {
                    shiftString[i] += shiftFactor;
                }
            } else if (shiftFactor < 0){
                distance = shiftString[i] - 65;
                if (Math.abs(shiftFactor) > distance){
                    shiftString[i] = 90 - (Math.abs(shiftFactor) - distance) + 1;
                } else {
                    shiftString[i] += shiftFactor;
                }
            }
    
        } else if (shiftString[i] >= 97 && shiftString[i] <= 122){  // if the letter is lowercase
            shiftFactor = shiftFactor % 26;
            if (shiftFactor > 0){
                distance = 122 - shiftString[i];
                if (shiftFactor > distance){
                 shiftString[i] = 97 + (shiftFactor - distance) - 1;
                } else {
                    shiftString[i] += shiftFactor;
                }
            } else if (shiftFactor < 0){
                distance = shiftString[i] - 97;
                if (Math.abs(shiftFactor) > distance){
                    shiftString[i] = 122 - (Math.abs(shiftFactor) - distance) + 1;
                } else {
                    shiftString[i] += shiftFactor;
                }
            }
         } else {
             continue;
         };
    
    };
    shiftString = shiftString.map(char => String.fromCharCode(parseInt(char, 0))).join('');
    return(shiftString);
    
    };

// Do not edit below this line
module.exports = caesar;
