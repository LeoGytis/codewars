function squareOrSquareRoot(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!Number.isInteger(Math.sqrt(array[i]))) {
            newArray.push(array[i] **2);
        } else { 
            newArray.push(Math.sqrt(array[i]));
        }
    }
    return newArray;  
}

console.log(squareOrSquareRoot([ 100, 101, 5, 5, 1, 1 ])); // -->expected = [ 10, 10201, 25, 25, 1, 1 ];
console.log(squareOrSquareRoot([4,3,9,7,2,1])); //---->[2,9,3,49,4,1]
