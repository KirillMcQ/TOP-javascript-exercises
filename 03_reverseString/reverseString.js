const reverseString = function(str) {
    let charArray = [];
    for (const character of str) {
        charArray.push(character);
    }
    charArray.reverse();
    return charArray.join('');
};

reverseString('Hello! World!')

// Do not edit below this line
module.exports = reverseString;
