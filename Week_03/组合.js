/**
 * @param {number} n => 4
 * @param {number} k  => 2
 * @return {number[][]}
 * 解法递归回溯
 */
let combine = function (n, k) {
    let result = [],
    temPath = []
    let helper = (start, temPath) => {
        if (temPath.length === k) {
            return result.push(temPath)
        }
        for (let i = start; i <= n; i++) {
            temPath.push(i);
            helper(i + 1, temPath.slice());
            temPath.pop();
        }
    }
    helper(1, temPath)
    return result;
};
console.log(combine(4,2))
