/**
 * @param {number[]} prices
 * @return {number}
 * 贪心算法
 */
let maxProfit = function (prices) {
    let sum = 0;
    for(let i=1;i<prices.length;i++){
        if (prices[i] > prices[i - 1]) sum += prices[i] - prices[i-1];
    }
    return sum;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));