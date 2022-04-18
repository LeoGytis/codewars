function maps(x) {
    let a = [];
    for (let i = 0; i < x.length; i++) {
       a[i] = x[i] * 2;
    }
    return a;
}

console.log(maps([1, 2, 3]));


