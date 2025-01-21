const removeFromArray = function(array, ...args) {
    for (arg of args) {
        let finished = false;
        let idx = 0;

        do {
            idx = array.indexOf(arg, idx);
            if (idx >= 0) {
                array.splice(idx,1);
            }
            length = array.length;
        } while (idx >= 0 && length > 1);
        
    }
    return array;
};

//removeFromArray([1, 2, 2, 3], 2)

// Do not edit below this line
module.exports = removeFromArray;
