/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 解法：二分法
 */

let search = function (nums,target) {
    let left = 0,
    right = nums.length -1;
    while (left<=right) {
        let mid = (left + right) >> 1;
        // [left,mid] 有序
        if (nums[mid] === target) return mid;
        if (nums[mid] > nums[left]) {
            if(target>=nums[left] && target<=nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // [mid, right] 有序
            if (target >= nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
