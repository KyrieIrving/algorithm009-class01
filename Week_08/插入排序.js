/**
 * @param {Array} arr
 * @return {array[]}
 * 从第一个元素开始， 该元素可以认为已经被排序；
 * 取出下一个元素， 在已经排序的元素序列中从后向前扫描；
 * 已排序） 大于新元素， 将该元素移到下一位置；
 * 重复步骤3， 直到找到已排序的元素小于或者等于新元素的位置；
 * 将新元素插入到该位置后；
 * 重复步骤2~5
 *
*/

let insertSort = function(arr) {
    let len = arr.length;
    let preIndex, currentVal;
    for(let i =1;i<len;i++) {
        preIndex = i-1;
        currentVal = arr[i];
        while(preIndex >=0 && arr[preIndex] > currentVal) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex --;
        }
        arr[preIndex +1] = currentIndex;
    }
    return arr;
}