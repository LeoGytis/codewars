function sameCase(a, b){
    if ( !(/[a-zA-Z]/.test(a)) ||
         !(/[a-zA-Z]/.test(b)) ) {
    return -1;
    }

        else if ( a.toUpperCase() === a && b.toUpperCase() ===  b ||
            a.toLowerCase() === a && b.toLowerCase() ===  b) {
        return 1;
        } 

            else if ( a.toUpperCase() === a && b.toLowerCase() ===  b ||
                    a.toLowerCase() === a && b.toUpperCase() ===  b) {
                return 0;
            }  
}
    
console.log(sameCase('C', 'B'));
console.log(sameCase('a', 'b'));
console.log('=========');
console.log(sameCase('A', 's'));
console.log(sameCase('d', 'Z'));
console.log('=========');
console.log(sameCase(' ', 'Z'));
console.log(sameCase('H', ':'));