const removeFromArray = function(arr, ...elementsToRemove) {
// The '...' before 'elementsToRemove' indicates that all 
// params after 'arr' will be placed into an array called 
//'elementsToRemove'


    do {
        flag = false;
        for (i = 0; i < arr.length; i++){
            if (elementsToRemove.includes(arr[i])){
                flag = true;
                arr.splice(i,1);
            }
        }
    } while (flag)

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
