function abbrevName(name) {
    const initials = name.split(' ').map(word => word[0]);
    let ini = initials[0] + '.' + initials[1];
    return ini.toUpperCase();
}

console.log(abbrevName('sam Haris'));