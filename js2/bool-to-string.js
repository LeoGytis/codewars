function boolToWord(bool) {
    if (bool) {
        return 'Yes';
    }
    if (!bool) {
        return 'No';
    }
}

console.log(boolToWord(true));
console.log(boolToWord(false));