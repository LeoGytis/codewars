//function countSheep(num) {
var countSheep = function (num){
    let sheep = '';
    for (let i = 1; i <= num; i++) {
        sheep += i + 'sheep...';
    }
   return sheep;
}


 console.log(countSheep(3));