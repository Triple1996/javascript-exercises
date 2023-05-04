const reverseString = function(stringToReverse) {

    let output = ''

    for (i = stringToReverse.length-1; i >= 0; i--){
        output+=stringToReverse[i];
    };

    return output;
};

// Do not edit below this line
module.exports = reverseString;
