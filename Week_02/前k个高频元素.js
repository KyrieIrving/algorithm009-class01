
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 哈希表解法
 */

let topKFrequent = function(nums,k) {
    let map = {},
    result = [];
    for(let i = 0;i<nums.length;i++) {
        if (map[nums[i]]) {
            map[nums[i]] += 1;
        } else {
            map[nums[i]] = 1;
        }
    }
    let keys = Object.keys(map);
    let list = keys.map(i => {
        return {
            key: i,
            value: map[i]
        };
    });
    list.sort((a,b) => b.value - a.value);
    for(let i =0;i<k;i++) {
        result.push(list[i].key)
    }
    return result;
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));