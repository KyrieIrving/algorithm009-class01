/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 * 解法sort
 */
let relativeSortArray = function(arr1, arr2) {
    arr1.sort((a, b) => {
        let ia = arr2.indexOf(a);
        let ib = arr2.indexOf(b);
        if (ia === -1 && ib === -1) {
            return a - b;
        } else if(ia === -1) {
            return 1;
        } else if (ib===-1) {
            return -1;
        } else {
            return ia - ib;
        }
    });
    return arr1;
}

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]))