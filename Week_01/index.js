//  26. 两数之和

/**
 * 通过indexOf判断
 */
var twoSum = function(nums, target) {
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


// 加一
// 解题思路 1：末位无进位，则末位加一即可，因为末位无进位，前面也不可能产生进位，比如 45 => 46
// 2:末位有进位，在中间位置进位停止，则需要找到进位的典型标志，即为当前位 % 10后为 0，则前一位加 1，直到不为 0 为止，比如 499 => 500
// 3:末位有进位，并且一直进位到最前方导致结果多出一位，对于这种情况，需要在第 2 种情况遍历结束的基础上，进行单独处理，比如 999 => 1000
/** 加一
 * 解题思路 1：末位无进位，则末位加一即可，因为末位无进位，前面也不可能产生进位，比如 45 => 46
 * 2:末位有进位，在中间位置进位停止，则需要找到进位的典型标志，即为当前位 % 10后为 0，则前一位加 1，直到不为 0 为止，比如 499 => 500
 * 3:末位有进位，并且一直进位到最前方导致结果多出一位，对于这种情况，需要在第 2 种情况遍历结束的基础上，进行单独处理，比如 999 => 1000
 */

var plusOne = function (digits) {
    var len = digits.length;
    for (var i = len -1; i>=0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if (digits[i] != 0) {
            return digits;
        }
    }
    digits = [...Array(len +1)].map(_ => 0);
    digits[0] =1;
    return digits;
};
console.log(plusOne([4,9,9]));



/** 接雨水
 * 解题思路：从左到右遍历设当列柱子为水洼洼底 同时更新，当前列左右两边洼滩的最大高度 以当前列为洼底的最大水洼面积为( Min(left_max,right_max) - height[i] ) * 1
 */
let trap = function(height) {
    let len = height.length;
    if (!height || height.length == 0) return 0;
    let sum = 0;
    for (let i = 1; i<len-1; i++) {
        // 求出当前水槽左边最大的高度
        let left_max = 0;
        for (let j = i-1; j>=0; j--) {
            left_max = Math.max(left_max, height[j])
        }
        // 求出当前水槽右边最大的高度
        let right_max = 0;
        for (let k = i+1; k < len; k++) {
            right_max = Math.max(right_max, height[k])
        }
        // 求出能储水的最大高度
        let min = Math.min(left_max, right_max)
        if(min>height[i]) {
            sum += min -height[i]
        }
    }
    return sum;
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));