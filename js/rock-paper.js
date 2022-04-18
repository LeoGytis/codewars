function rps(p1, p2) {
    if (p1 === p2) {
        return 'Draw!';
    } else 
     if (p1 == 'scissors' && p2 == 'paper') {
        return 'Player 1 won!';
        } else 
     if (p1 == 'paper' && p2 == 'rock') {
            return 'Player 1 won!';
        } else 
        if (p1 == 'rock' && p2 == 'scissors') {
            return 'Player 1 won!';
        } else return 'Player 2 won!';    
};

console.log(rps('paper', 'paper'));
console.log(rps('scissors', 'scissors'));
console.log(rps('rock', 'rock'));

console.log('1 Player won ------');

console.log(rps('scissors', 'paper'));
console.log(rps('paper', 'rock'));
console.log(rps('rock', 'scissors'));

console.log('2 Player won ------');

console.log(rps('scissors', 'rock'));
console.log(rps('rock', 'paper'));
console.log(rps('paper', 'scissors'));






