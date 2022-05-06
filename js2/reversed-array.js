function digitize(n) {
    let number = n.toString();
    let revNum = '';
    let newA = [];
    for (let i = number.length - 1; i >= 0; i--) {
         newA.push(Number(number[i]));
    }
    return newA;
}

console.log(digitize(348597)); // => [7,9,5,8,4,3]