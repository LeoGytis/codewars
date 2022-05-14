function reverseWords(str){
    let words = str.split(" ");
    let sentence = '';
    for (let i = 0; i < words.length; i++) {
        sentence = words[i] + ' ' + sentence;
    }
    return sentence.trim();
}

console.log(reverseWords("yoda doesn't speak like this" )); //  "this like speak doesn't yoda"