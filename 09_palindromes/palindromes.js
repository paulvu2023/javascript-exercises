const palindromes = function (word) {
    word = word.toLowerCase().replace(/\W/g, '');
    reverse = word;
    reverse = reverse.split('').reverse().join('');
    if (word === reverse) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
