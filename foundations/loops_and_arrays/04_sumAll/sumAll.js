const sumAll = function(num1,num2) {
    let sumOfAll = 0
    let num3 = num2 + 1
    let num4 = num1 + 1
    if(Number.isInteger(num1) && Number.isInteger(num2)) {
    if (num1 < 0) {
        return 'ERROR'
    }
    else if (num2 < 0) {
        return 'ERROR'
    }
    else if (num1 < num3) {
        for (let i = num1; i < num3; i++) {
                sumOfAll += i
        }
    }
    else if (num4 > num2) {
        for (let i = num2; i < num4; i++) {
                sumOfAll += i
        }
    }
    
    return sumOfAll
    }

    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
