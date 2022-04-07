var min = function(list){
    let min = Infinity;
    for (let i = 0; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i];
        }
    }
    return min;
}

var max = function(list){
    let max = 0;
    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        if (max < list[i]) {
            max = list[i];
        }  
    }     
    return max;
}

var list1 = [4, 6, 2, 1, 9, 63, -134, 566];
var list2 = [42, 54, 65, 87, 0];
console.log(min(list1));      
console.log(min(list2));      
console.log(max(list2));      
console.log(max(list1));      

