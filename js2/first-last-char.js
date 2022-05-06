function removeChar(str){
    let newString = str.substring(1, str.length-1);
    return newString;
}

console.log(removeChar('Nuobuodu'));
console.log(removeChar('Leopardziukas'));
console.log(removeChar('Linksma'));

function removeChar(str) {
    return str.slice(1, -1);
  }

   
   
   
   
   