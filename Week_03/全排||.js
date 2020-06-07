/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给定一个可包含重复数字的序列， 返回所有不重复的全排列
 * 解法递归回溯剪枝 [1,1,2]
 */
let permuteUnique = function (nums) {
    let result = [],
    temPth = [],
    userd =[];
    nums = nums.sort((a, b) => a - b);
    let helper = (temPth) => {
        if (temPth.length === nums.length) {
            return result.push(temPth);
        }
        for(let i =0;i<nums.length;i++) {
            if(userd[i] || (i > 0 && nums[i] === nums[i - 1] && !userd[i - 1])) continue; // 去重
            temPth.push(nums[i]);
            userd[i] = true;
            helper(temPth.slice());
            temPth.pop();
            userd[i] = false;
        }
    };
    helper(temPth);
    return result;
}
console.log(permuteUnique([1,1,2]));