/**
 * @param {number[]} bills
 * @return {boolean}
 * 解法：贪心算法
 */
let lemonadeChange = function (bills){
    let five = 0,
    ten =0;
    for(let i=0;i<bills.length;i++) {
        if (bills[i] === 5) {
            five++;
        } else if (bills[i] === 10) {
            if (five === 0) {
                return false;
            }
            five--;
            ten++;
        } else if (bills[i] === 20) {
            if (five> 0 && ten>0) {
                five--;
                ten--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
}
console.log(lemonadeChange([5, 5, 5, 10, 20]));