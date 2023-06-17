const removeFromArray = function(arr, ...numsToRemove) {
    let filteredArr = [];
    for (let el of arr) {
        if (!numsToRemove.includes(el)) {
            filteredArr.push(el);
        }
    }
    return filteredArr;
};

// Do not edit below this line
module.exports = removeFromArray;
