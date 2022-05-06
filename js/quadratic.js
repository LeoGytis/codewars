function quadratic(x1, x2){
    newA = [];
    let a = 1;
    let b = x2 * (-1) + x1 * (-1);
    let c = x1 * x2;
    newA.push(a, b, c);
    return newA;
}

console.log('answer 1 -1 0',quadratic(0,1));
console.log('answer 1 -2 1',quadratic(1,1));
console.log('answer 1 9 20',quadratic(-5,-4));