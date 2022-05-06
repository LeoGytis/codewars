function pillars(num_pill, dist, width) {
    let dis = 0;
    if (num_pill === 1) return 0;
    dis = (num_pill - 1) * dist * 100 + width * num_pill - width * 2;
    return dis;
}
console.log(pillars(2, 20, 25));
console.log(pillars(3, 20, 25));

console.log(pillars(11, 15, 30));