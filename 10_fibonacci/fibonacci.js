const fibonacci = function(num) {
    let prev = 1;
       let curr = 1;
        if (num < 0) {
            return("OOPS");
        } else { for (let i = 2; i < num; i++){
            next = prev + curr;
            prev = curr;
            curr = next;
        }
        return curr;
        }
};

// Do not edit below this line
module.exports = fibonacci;
