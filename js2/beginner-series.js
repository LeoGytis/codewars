function past(h, m, s){
    return s * 1000 + m * 60 * 1000 + h * 60 * 60 * 1000;

}

console.log(past(0, 1, 1));  /// result = 61000  