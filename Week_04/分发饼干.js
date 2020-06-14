/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * 解法：贪心算法
 */
let findContentChildren = function(g,s){
    let maxVal = 0, i=0, j=0;
    while(i<g.length && j<s.length){
        if (s[j] >= g[i]) {
            i++;
            j++;
            maxVal++;
        } else {
            j++;
        }
    }
    return maxVal;
};
console.log(findContentChildren([1, 2, 3], [1,1]))