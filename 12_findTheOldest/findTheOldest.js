const findTheOldest = function (arr) {
  let agesAndNames = [];
  for (let person of arr) {
    let currentAge;
    if (person["yearOfDeath"] === undefined) {
      currentAge = 2023 - person["yearOfBirth"];
    } else {
      currentAge = person["yearOfDeath"] - person["yearOfBirth"];
    }
    agesAndNames.push({ name: person["name"], age: currentAge });
  }
  let oldest = { age: 0 };
  for (let curPerson of agesAndNames) {
    if (curPerson["age"] > oldest["age"]) {
      oldest = curPerson;
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
