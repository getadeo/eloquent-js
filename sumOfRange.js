function range(start, end, step = 1) {
    let allNumbers = [];
    if (step >= 0 && end > start){
        for (let i = start; i <= end; i += step) {
            allNumbers.push(i);
        }
    } else {
        for (let i = start; i >= end; i -= Math.abs(step)) {
            allNumbers.push(i);
        }
    }
 
    return allNumbers;
}

function sum(allNumbers) {
    let total = 0
    for (let number of allNumbers) {
        total += number
    }
    return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2));
// → [5, 4, 3, 2]