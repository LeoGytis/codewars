const sheep1 = ['sheep', 'sheep', 'sheep', 'wolf', 'sheep',];
const sheep2 = ['sheep', 'sheep', 'wolf'];

function warnTheSheep (queue) {
    for (let i = queue.length - 1; i >= 0; i--) {
        if (queue[i] === 'sheep') {
            console.log(`Oi! Sheep number, ${i + 1} ! You are about to be eaten by a wolf!`);
        } else {
            console.log('Pls go away and stop eating my sheep');
        }
    }
}

warnTheSheep(sheep1);

// let reverse = '';

//     for (let i = text.length - 1; i >= 0; i--) {
//         reverse += text[i];
//     }np
