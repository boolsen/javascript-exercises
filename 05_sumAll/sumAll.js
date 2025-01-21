const sumAll = function(num1, num2) {
    let totalSum = 0;
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    if ((num1 % 1) != 0 || (num2 % 1) != 0) {
        return 'ERROR';
    }
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        return 'ERROR';
    }
    startNum = Math.min(num1, num2);
    endNum = Math.max(num1, num2);

    for (let i = startNum; i <= endNum; i++) {
        totalSum += i;
    }

    return totalSum;
};

//sumAll(1,4);

// Do not edit below this line
module.exports = sumAll;
