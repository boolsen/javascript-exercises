const fibonacci = function(num) {
    let digit2 = 0;
    let digit = 1;
    let lastdigit = 0;
    num = parseInt(num);

    if (num === 0) {
        return 0;
    }
    else if (num < 1) {
        return "OOPS";
    }

    for (let i = 1; i < num; i++ ) {
        lastdigit = digit;
        digit += digit2;
        digit2 = lastdigit;
    }

    return digit;

};

//fibonacci(6);

// Do not edit below this line
module.exports = fibonacci;
