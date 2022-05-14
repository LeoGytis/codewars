function fakeBin(x){
    let xString = x.toString();
    let newString = '';
    for (let i = 0; i < xString.length; i++) {
        if (xString[i] < 5) {
            newString += 0;
        } else newString += 1;
    }
    return newString;
}


console.log(fakeBin(635133));