/**
 * @param {string} s
 * @return {number}
 */


let countSubstrings = function(s) {
    let n =s.length;
    let num = 0;
    let dp = Array.from(new Array(n).fill(''), () => new Array(n).fill(false));
    console.log('dp',dp);
    for(let i = 0;i<n;i++) {
        for(let j =0;j<=i;j++) {
            if (s[i]===s[j] && (i-j<2 || dp[i-1][+1])) {
                dp[j][i] = true;
                num++;
            }
        }
    }
    return num;
}

console.log(countSubstrings("abc"))