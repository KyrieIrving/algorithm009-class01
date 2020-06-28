/**
 * @param {number[][]} triangle
 * @return {number}
 * 解法动态规划自底向上
 */
// let minimumTotal = function(triangle) {
//     let n = triangle.length;
//     for(let i =n-2; i>=0;i--) {
//         for (let j = 0; j < triangle[i].length;j++) {
//             triangle[i][j] = Math.min(triangle[i+1][j], triangle[i+1][j+1]) + triangle[i][j];
//         }
//     }
//     return triangle[0][0];
// };
/**
 * @param {number[][]} triangle
 * @return {number}
 * 解法递归自顶向下
 */
let minimumTotal = function(triangle) {
    let helper = (row, cor, triangle) => {
        // 递归终止条件
        if (row === triangle.length-1) {
            return triangle[row][cor]
        }
        // 向下递归
        let left = helper(row + 1, cor, triangle);
        let right = helper(row+1, cor + 1, triangle);
        return Math.min(left, right) + triangle[row][cor];
    }
    return helper(0, 0, triangle)
}

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]));