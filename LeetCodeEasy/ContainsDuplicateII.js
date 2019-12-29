/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let dupl = {};

    for (i in nums) {
        let num = nums[i];
        if (dupl[num] && i - dupl[num] <= k) {
            return i - dupl[num] <= k;
        } else {
            dupl[num] = i;
        }
    }
    return false;
};