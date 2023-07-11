const findTheOldest = function(arr) {
    let oldestIndex = 0;
    let oldestAge = 0;
    for (let i = 0; i < arr.length; i++) {
        if ('yearOfDeath' in arr[i]) {
            if ((arr[i].yearOfDeath - arr[i].yearOfBirth) > oldestAge) {
                oldestIndex = i;
                oldestAge = arr[i].yearOfDeath - arr[i].yearOfBirth;
            }
        } else {
            let year = new Date().getFullYear();
            if (year - arr[i].yearOfBirth > oldestAge) {
                oldestIndex = i;
                oldestAge = year - arr[i].yearOfBirth;
            }
        }
    }
    return arr[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
