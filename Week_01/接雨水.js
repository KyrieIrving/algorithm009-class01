/** 接雨水
 * 解题思路：从左到右遍历设当列柱子为水洼洼底 同时更新，当前列左右两边洼滩的最大高度 以当前列为洼底的最大水洼面积为( Min(left_max,right_max) - height[i] ) * 1
 */
let trap = function (height) {
    let len = height.length;
    if (!height || height.length == 0) return 0;
    let sum = 0;
    for (let i = 1; i < len - 1; i++) {
        // 求出当前水槽左边最大的高度
        let left_max = 0;
        for (let j = i - 1; j >= 0; j--) {
            left_max = Math.max(left_max, height[j])
        }
        // 求出当前水槽右边最大的高度
        let right_max = 0;
        for (let k = i + 1; k < len; k++) {
            right_max = Math.max(right_max, height[k])
        }
        // 求出能储水的最大高度
        let min = Math.min(left_max, right_max)
        if (min > height[i]) {
            sum += min - height[i]
        }
    }
    return sum;
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));