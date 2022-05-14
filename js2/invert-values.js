function invert(array) {
    let newA = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            newA.push(-Math.abs(array[i]));
        } else if (array[i] < 0) {
            newA.push(Math.abs(array[i]));
        } else {
            newA.push(-Math.abs(array[i]));
        }
    }
    
    return newA ;
 }


console.log(invert([1,2,3,4,5]));   // == [-1,-2,-3,-4,-5]);
console.log(invert([1,-2,3,-4,5,0])); // == [-1,2,-3,4,-5]);
