function century(year) {
    return Math.ceil(year/100);
}

console.log(century(1705)); // 18
console.log(century(1895)); // 19
console.log(century(1500)); // 15