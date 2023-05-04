const repeatString = function(repeatString, timesToRepeat) {
    if (timesToRepeat < 0) return 'ERROR';
    
    let output = '';
    for (i = 0; i < timesToRepeat; i++){
        output += repeatString;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
