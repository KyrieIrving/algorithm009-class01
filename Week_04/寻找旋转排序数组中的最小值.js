/**
 * @param {number[]} nums
 * @return {number}
 * 解法：二分法
 */

let findMin = function(nums) {
    let left = 0,right=nums.length-1;
    while(left<right) {
        let mid = (left+right) >>1;
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
};
console.log(findMin([3, 4, 5, 1, 2]));
