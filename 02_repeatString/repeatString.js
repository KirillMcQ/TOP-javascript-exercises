const repeatString = function(str, timeRepeated) {
    let outputStr = "";
    for (let i = 0; i < timeRepeated; ++i) {
        outputStr+=str;
    }
    return outputStr;
};

// Do not edit below this line
module.exports = repeatString;
