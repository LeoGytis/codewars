function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {

        if (haystack[i] == 'needle') {
         return `found the needle at position ${i}`;


     }



}


let stack = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];

console.log(findNeedle(stack));
