function positiveSum(arr) {
    let posSum = 0;
    for (let i = 0; i < arr.length; i++) {
         if (arr[i] >= 0) {
             posSum += arr[i];
         }
    }
    return posSum;
}
console.log(positiveSum([1, -4, 7, 12]));


