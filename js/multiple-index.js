function multipleOfIndex(array) {
    let newA = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % i === 0) {
          newA.push(array[i]);
        }
    }
    return newA;
  }
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])); // =>  [-6, 32, 25]
