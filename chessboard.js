let size = 8;
let s = "";

for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
        if ((i+j) % 2 ==0){
            s += " ";
        } else {
            s += "#";
        }
    }
    s += "\n";
};

console.log(s);
