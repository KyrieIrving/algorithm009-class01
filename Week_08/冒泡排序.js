
let bubbleSort = function(arr) {
    let len = arr.length;
    for(let i =0; i<len-1;i++) {
        for(let j =0;j<len-1-i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([3, 2, 5, 9, 34, 23, 10]));