const sumAll = function(firstNum, secondNum) {
    let sum = 0;
    let smallerNum, largerNum;

    if (firstNum < 0 || secondNum < 0) return 'ERROR'; 
    if (typeof firstNum != 'number' || typeof secondNum != 'number'){
        return 'ERROR';
    }

    if (firstNum < secondNum) {
        smallerNum = firstNum;
        largerNum =  secondNum;
    }
    else {
        smallerNum = secondNum;
        largerNum =  firstNum;
    }

    for (i = smallerNum; i <= largerNum; i++){
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
