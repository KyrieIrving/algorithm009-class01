/**
 * @param {character[][]} grid
 * @return {number}
 * 解法：DFC深度优先遍历
 */

let numIslands = function (grid) {
    if (!grid || grid.length===0) return 0;
    let len = grid.length,
    size = grid[0].length,
    island = 0;
    let sink = (i,j)=>{
        // terminator
        if (grid[i][j] === '0') {
            return 0;
        }
        // process
        grid[i][j] = '0';
        // dirll down
        if (i+1 < len && grid[i+1][j] === '1') {
            sink(i+1, j)
        }
        if (i - 1 >= 0 && grid[i - 1][j] === '1') {
            sink(i - 1, j)
        }
        if (j+1<size && grid[i][j+1]) {
            sink(i, j+1)
        }
        if (j - 1 >= 0 && grid[i][j - 1]) {
            sink(i, j - 1)
        }
        return 1;
    }
    for(let i =0;i<len;i++) {
        for(let r =0;r<size;r++) {
            if (grid[i][r] == '1') {
                island += sink(i,r)
            }
        }
    }
    return island;
};
console.log(numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]))