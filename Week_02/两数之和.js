/**
 * @param {string}
 * @param {string}
 * @return {boolean}
 * 哈希表解法：
 */
var twoSum = function(nums, target) {
    let hash = new Map();
    for (let i = 0;i<nums.length;i++) {
        let dep = target - nums[i]
        if (hash.has(dep)) {
            return [hash.get(dep), i]
        }
        hash.set(nums[i], i)
    }
};
console.log(twoSum([2, 7, 11, 15], 9));