function checkTheBucket(bucket){
    let gold = 0;
    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i] === 'gold') {
            gold += 1;
        } 
    }
    if (gold >= 1) {
        return true;
    } else return false;
}

console.log(checkTheBucket(["stone", "stone", "stone", "stone", "gold"]));
console.log(checkTheBucket(["gold", "stone", "stone", "stone", "stone", "gold"]));
console.log(checkTheBucket(["stone", "stone", "stone", "stone"]));