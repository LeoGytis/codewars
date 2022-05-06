function sameCase(a, b){
    if (typeof a === 'string' && typeof b === 'string') {
        if (a.toLowerCase === b.toLowerCase) {
            console.log('----');
            return 1;
        } else
        if (a.toLowerCase !== b.toLowerCase) {
            console.log('adas');
            return 0;
        }
        
    } 

    return -1;
}

console.log('-1', sameCase(0, 'c'));
console.log('0', sameCase('bbbb', 'GGG'));
console.log(sameCase('b', 'r'));
console.log(sameCase('A', 'B'));
