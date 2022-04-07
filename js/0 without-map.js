function maps(x){
    for (let i = 0; i < x.length; i++) {
       x[i] *= 2;
    }
    return x;
}
var x = [1, 2, 5];
var x2 = [3, 5, 8]
console.log(maps(x));
maps(x2);



