const firstUniqueLetter = (s: string) => {
    const pastLetters = new Set(); //Sets tracking all letters and ones that have been repeated
    const repeatedLetters = new Set();

    if(s.length <= 1) return s;//A string of this size causes the output to be the string itself

    s.split('').forEach((currentLetter) => {//String is split into an array of characters
        if(repeatedLetters.has(currentLetter)) return;

        else if(pastLetters.has(currentLetter)){
            repeatedLetters.add(currentLetter);
            pastLetters.delete(currentLetter);
            return;
        }

        pastLetters.add(currentLetter);
    })

    if(!pastLetters.size) return '';
    
    let firstChar = pastLetters.values();

    return firstChar.next().value;
};

//Testing section
const randomString = (len: number) => {
    const included = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let output = '';
    for (let i = 0; i < len; i++) {
        output += included.charAt(Math.random() * included.length);
    }

    return output;
}

const tests : string[] = [];

for(let i = 0; i<50; i++){
    tests.push(randomString(Math.floor(Math.random() * 50)));
}

tests.forEach((test) => {
    console.log(firstUniqueLetter(test), "\t", test);
})
