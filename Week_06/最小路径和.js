/**
 * @param {number[][]} grid
 * @return {number}
 * 解法动态规划：1：状态定义：假设走到dp[i][j]为当前最小路径和，
 * 2：推到公式：只能向下或者向右走,这就意味着当前格子只能向上或者向左走dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j]) + dp[i][j]
 * 3:初始化：第一行n列和第一列n行均为原始数组值
 * 4：边界条件： 格子有边界， 因此当i == 0 或j == 0 时， i - 1 和j - 1 会越界
 *  i = 0， j != 0 时, dp[i][j] = dp[i][j - 1] + grid[i][j]
    i != 0， j == 0 时, dp[i][j] = dp[i - 1][j] + grid[i][j]
    i != 0 && j != 0 时, dp[i][j] = Min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    i == 0 && j == 0 时, dp[i][j] = grid[i][j]

 */

let minPathSum = function(grid) {
    let n = grid.length,
    m = grid[0].length;
    let dp = Array.from(new Array(n), () => new Array(m));
    for (let i =0; i<n; i++) {
        for(let j =0;j<m;j++) {
            if (i!=0 && j!=0) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
            } else if (i!=0 && j===0) {
                dp[i][j] = dp[i - 1][j] + grid[i][j];
            } else if (i === 0 && j!=0) {
                dp[i][j] = dp[i][j - 1] + grid[i][j];
            } else if (i === 0 && j ===0) {
                dp[i][j] = grid[i][j];
            }
        }
    }
    return dp[n-1][m-1];
};
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));