/** 加一
 * 解题思路 1：末位无进位，则末位加一即可，因为末位无进位，前面也不可能产生进位，比如 45 => 46
 * 2:末位有进位，在中间位置进位停止，则需要找到进位的典型标志，即为当前位 % 10后为 0，则前一位加 1，直到不为 0 为止，比如 499 => 500
 * 3:末位有进位，并且一直进位到最前方导致结果多出一位，对于这种情况，需要在第 2 种情况遍历结束的基础上，进行单独处理，比如 999 => 1000
 */

var plusOne = function (digits) {
    var len = digits.length;
    for (var i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if (digits[i] != 0) {
            return digits;
        }
    }
    digits = [...Array(len + 1)].map(_ => 0);
    digits[0] = 1;
    return digits;
};
console.log(plusOne([4, 9, 9]));