/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    let numBoats = 0;
    let left = 0;
    let right = people.length - 1;
    people.sort((a, b) => a - b);


    while (left <= right) {
        if (people[left] + people[right] <= limit) left++;
        right--;
        numBoats++;

    }

    return numBoats;
};

console.log(numRescueBoats([3, 2, 2, 1], 3));