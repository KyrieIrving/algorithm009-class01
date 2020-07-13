
/**
 * @param {Array} arr
 * 解法： n个记录的直接选择排序可经过n - 1 趟直接选择排序得到有序结果。 具体算法描述如下：
 * 初始状态： 无序区为R[1..n]， 有序区为空；
 * 第i趟排序(i = 1, 2, 3… n - 1) 开始时， 当前有序区和无序区分别为R[1..i - 1] 和R(i..n）。
*  该趟排序从当前无序区中 - 选出关键字最小的记录 R[k]， 将它与无序区的第1个记录R交换， 使R[1..i] 和R[i + 1..n) 分别变为记录个数增加1个的新有序区和记录个数减少1个的新无序区； n - 1 趟结束， 数组有序化了。
 */
let selectionSort = function(arr) {
    let minIndex, temp;
    for(let i =0;i<arr.length-1;i++) {
        minIndex = i;
        for(let j =i+1;j<arr.length;j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
};
console.log(selectionSort([3,2,5,9,34,23,10]));