// function warnTheSheep (queue) {
//     let num = 0;
//     for (let i = queue.length - 1; i >= 0; i--) {
//         if (queue[i] === 'wolf') {
//             num = queue.length - i + 1;
//             console.log(`Oi! Sheep number, ${num}! You are about to be eaten by a wolf!`);
//             break;
//         } else {
//             console.log('Pls go away and stop eating my sheep');
//             break;
//         }
//     }
// }

function warnTheSheep (queue) {
    let num = 0;
    for (let i = 0; i <= queue.length; i++) {
        num = queue.length - i - 1;
        if (queue[i] === 'wolf' && i === queue.length - 1) {
           return `Pls go away and stop eating my sheep`;            
        } 
        else if (queue[i] === 'wolf') {
            return `Oi! Sheep number ${num}! You are about to be eaten by a wolf!`;
        }
    }
}


console.log(warnTheSheep(['sheep', 'sheep', 'sheep', 'wolf', 'sheep',]));
console.log(warnTheSheep(['sheep', 'sheep', 'wolf']));
console.log(warnTheSheep(['sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep', 'sheep']));
console.log(warnTheSheep(['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep']));
console.log(warnTheSheep(['sheep', 'sheep','sheep', 'wolf']));





// let reverse = '';
//     for (let i = text.length - 1; i >= 0; i--) {
//         reverse += text[i];
//     }np

let du = 4;
for (i2 = 0; i2 <= du.length; i2++) {
    let numeris = du.length - i2;
    console.log(i2, numeris);
}