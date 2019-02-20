function reverseArray(ar) {
    let ar2 = [];
    for (let a of ar) {
        ar2.unshift(a)
    }
    return ar2;
}

function reverseArray2(ar) {
    let ar2 = [];
    for (let i = ar.length - 1; i >= 0; i--) {
        ar2.push(ar[i])
    }
    return ar2;
}

function reverseArrayInPlace(ar) {
    for (let i = 0; i <= (ar.length / 2); i++) {
        let el = ar[i];
        ar[i] = ar[ar.length - 1 - i];
        ar[ar.length - 1 - i ] = el;
    }
    return ar;
}

console.log(reverseArray(["A", "B", "C"]));

let arrayValue = ["a","b","c","d","e"];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
