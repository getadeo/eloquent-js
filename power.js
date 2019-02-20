const makeNoice = function() {
    console.log("Pling!");
};

makeNoice();

const power = function(base, exponent) {
    let result = 1;
    for ( let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 10));
