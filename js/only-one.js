function check(a, x) {
    for (let i = 0; i < a.length; i++) {
        if (a.includes(x)) {
            return true;
        } else return false;
    }
}

console.log(check([66, 100, 55], 66));
console.log(check([66, 100, 55], 6));