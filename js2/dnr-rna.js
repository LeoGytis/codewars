function DNAtoRNA(dna) {
    return dna.split('T').join('U');
}

console.log(DNAtoRNA('TTTT'));
console.log(DNAtoRNA('laTas'));
console.log(DNAtoRNA('GCAT'));