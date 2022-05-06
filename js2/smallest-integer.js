class SmallestIntegerFinder {
    constructor(args) {
        this.arejus = args;
    }

    findSmallestInt(args) {
        let minNum = Infinity;
        for (let i = 0; i <= this.arejus.length; i++) {
            if (this.arejus[i] < minNum) {
                minNum = this.arejus[i];
            }
        }
        return minNum;

    }
}

newA = [34, -345, -1, 100];
newB = [34, -1, 100, -65, 87];

const skaiciusA = new SmallestIntegerFinder(newA);
const skaiciusB = new SmallestIntegerFinder(newB);

console.log(skaiciusA.findSmallestInt());
console.log(skaiciusB.findSmallestInt());




