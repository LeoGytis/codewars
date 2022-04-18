function twiceAsOld(dadYearsOld, sonYearsOld) {
    let years = dadYearsOld - sonYearsOld * 2;
    return Math.abs(years);
}

console.log(twiceAsOld(36, 7));  // 22 years ago
console.log(twiceAsOld(55, 30));  // 5 years ago
