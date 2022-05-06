function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    for (let i = 0; i < classPoints.length; i++) {
        const point = classPoints[i];
        sum += point;
    }
    let avg = sum / classPoints.length;
    if (yourPoints > avg) {
        return true;
    } else return false;
}

console.log(betterThanAverage([2, 3], 5)); // --> true
console.log(betterThanAverage([2, 3, 4, 6], 5)); // --> 
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)); // --> false

