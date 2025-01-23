const palindromes = function (string) {
    string = string.replace(/ /g,'').replace(' ','').replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').toLowerCase();
    let count = 0;
    do {
        if (string.charAt(count) != string.charAt(string.length - count - 1)) {
            return false;
        }
        count++;
    } while (count * 2 <= string.length);
    return true;

};

//palindromes('A car, a man, a maraca.');

// Do not edit below this line
module.exports = palindromes;
