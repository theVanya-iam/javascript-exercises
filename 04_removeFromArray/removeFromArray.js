const removeFromArray = function() {
    
    let userArray = arguments[0];
    let args = [...arguments];

    for (let i = 1; i < arguments.length; i++) {
            if (userArray.indexOf(args[i]) == -1){
                continue;
            }
            const index = userArray.indexOf(args[i]);
            userArray.splice(index, 1);
    }
    return(userArray) 
     
    };

// Do not edit below this line
module.exports = removeFromArray;
