function repeatStr (n, s) {
    let h = '';
    for (let i = 0; i < n; i++) {
        h = h + s;
    }
    return h;
  }

console.log(repeatStr(5, 'Hello'));
