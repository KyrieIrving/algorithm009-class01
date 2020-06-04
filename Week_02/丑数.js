/**
 * @param {number} n
 * @return {number}
 * 动态规划解法：分析：因为丑数只包含质因子2，3，5，所以对于一个丑数都是前面某个丑数乘2，3，5所得
 * 1： 准备是三个指针part2， part3， part5，他们指向的数只能乘2，3，5
 * 2： 在循环的过程中每次区 res[part2] * 2, res[part3] * 3, res[part5] * 5 中的最小值， 并且把对应的指正向前移， 有效循环n次， 当循环结束过后， res数组中按从小到大的顺序保存了丑数
 */

let nthUglyNumber  = function(n) {
    let res = new Array(n);
    res[0] = 1;
    let part2 =0,
    part3 =0,
    part5 = 0;
    for(let i = 1;i<res.length;i++) {
        res[i] = Math.min(res[part2] * 2, res[part3] * 3, res[part5] * 5);
        if (res[i] === res[part2] * 2) ++part2;
        if (res[i] === res[part3] * 3) ++part3;
        if (res[i] === res[part5] * 5) ++part5;
    }
    return res[n-1];

};
console.log(nthUglyNumber(10));