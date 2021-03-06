/**
 * @param {character[][]} matrix
 * @return {number}
 */

let maximalSquare = function(matrix) {
    if (matrix.length === 0) return 0;
    let n = matrix.length,
    m = matrix[0].length,
    dp = [],
    max = Number.MIN_VALUE;
    for(let i =0;i<n+1;i++) {
        if (i === 0) {
            dp[i] = new Array(m+1).fill(0);
        } else {
            dp[i] = [0];
        }
    }
    console.log('dp', dp)
    for(let i =1;i<n+1;i++){
        for(let j =1;j<m+1;j++){
            if (matrix[i-1][j-1] === '1') {
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) +1;
                max = Math.max(max, dp[i][j]);
            } else {
                dp[i][j] = 0;
            }
        }
    }
    return max * max;
}
console.log(maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
]));