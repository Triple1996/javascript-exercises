const fibonacci = function(num) {
    if (num < 0){
        return "OOPS";
    }
    return fibo(num);
};

function fibo(num){
    if (num == 1 || num == 2) 
        return 1;
    else 
        return fibo(num-1) + fibo(num-2);
}

// Do not edit below this line
module.exports = fibonacci;
