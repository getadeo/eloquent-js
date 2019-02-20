function greet(who) {
    console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

//EX 2
function chicken() {
    return egg();
}
function egg() {
    return chicken();
}
console.log(chicken() + " came first.")
