const reverseString = function(string) {
    let reversestring = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversestring += string[i];
    }
    return reversestring;
};

// Do not edit below this line
module.exports = reverseString;
