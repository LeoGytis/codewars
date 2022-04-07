
function years(age1, age2) {
    sum = age1;
    for (let i = 10; i <= 0; i++) {
       age1++;
       age2++; 
       console.log(i);
       if (age1 === age2 * 2) {
            return 'Po tiek metu', i;
        }
    }
}

years(30, 10);




// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

