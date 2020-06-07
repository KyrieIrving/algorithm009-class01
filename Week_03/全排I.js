/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给定一个 没有重复 数字的序列， 返回其所有可能的全排列。
 * 解法递归回溯
 */

let permute = function(nums) {
    let result = [],
    temPath = [];
    const len = nums.length;
    let helper = (temPath) => {
        if (temPath.length === len) {
            return result.push(temPath);
        }
        for (let i= 0;i<len;i++) {
            if (!temPath.includes(nums[i])) {
                temPath.push(nums[i]);
                helper(temPath.slice());
                temPath.pop();
            }
        }
    };
    helper(temPath);
    return result;
}
console.log(permute([1,2,3]))