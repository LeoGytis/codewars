function countPositivesSumNegatives(input) {
    let newArr = [];
    let sumPos = 0;
    let sumNeg = 0;
    let newA = [];
    
    if (input === null || input.length === 0)
    return newArr;

    for (let i = 0; i < input.length; i++) {
        
        if (input[i] > 0) {

            sumPos ++;
        } else if (input[i] < 0) {
            sumNeg += input[i];
        } 
        
    }
    newArr.push(sumPos, sumNeg);
    return newArr;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// should return [10, -65]
console.log(countPositivesSumNegatives(array));

let emptyArray = [];
console.log(countPositivesSumNegatives(emptyArray));



