const quarterOf = (month) => {
    if (month <= 3) return 1;    
    if (month >= 4 && month <= 6) return 2;    
    if (month >= 7 && month <= 9) return 3;    
    if (month >= 10) return 4;    
  }

console.log(quarterOf(3));
console.log(quarterOf(5));
console.log(quarterOf(8));
console.log(quarterOf(11));