//EX 1
function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

//EX 2
function multiplier(factor) {
    return nubmber => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
