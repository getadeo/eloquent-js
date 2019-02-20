let countBs = (s) => {
    let stringCount = s.length
    let bCount = 0
    for (let count = 0; count <= stringCount; count++) {
        if (s[count] === "B") {
            bCount += 1;
        }
    }
    return bCount
}

let countChar = (word, char) => {
    let stringCount = word.length
    let charCount = 0
    for (let count = 0; count <= stringCount; count++){
        if (word[count] === char) {
            charCount += 1;
        }
    }
    return charCount;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
console.log(countChar("ge", "s"));
