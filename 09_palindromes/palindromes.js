const palindromes = function (stringToReverse) {

    stringToReverse = stringToReverse.toLowerCase();
    let temp = stringToReverse.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    let temp2 = temp.replace(/\s/g,"");
    stringToReverse = temp2;


    let output = ''

    for (i = stringToReverse.length-1; i >= 0; i--){
        output+=stringToReverse[i];
    };

    return (output == stringToReverse);
};

// Do not edit below this line
module.exports = palindromes;
