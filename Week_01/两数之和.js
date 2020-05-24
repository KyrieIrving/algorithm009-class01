

/** 两数之和
 * 通过indexOf判断
 */
var twoSum = function (nums, target) {
    var result = [],
        len = nums.length;
    for (var i = 0; i < len; i++) {
        var dif = target - nums[i];
        if (result.indexOf(dif) > -1) {
            return [result.indexOf(dif), i];
        }
        result[i] = nums[i];
    }
};
console.log(twoSum([2, 7, 11, 15], 9));