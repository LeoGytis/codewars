function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
        sum += numbers[i] ** 2;
    }
    return sum;
}


console.log(squareSum([1,2,8]));
// console.log(squareSum([0, 3, 4, 5]));