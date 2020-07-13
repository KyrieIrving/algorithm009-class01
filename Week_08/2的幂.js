/**
 * @param {number} n
 * @return {boolean}
 * 解法： 满足2的幂条件， 数字的二进制有且只有一个1， 其余均为0， 即n & (n - 1) == 0
 */
let isPowerOfTwo = function() {
    return n> 0 && n&(n-1) ===0;
}