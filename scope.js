function bar(b) {
    console.log(a);
}
function foo() {
    const a = 5
    bar(10);
}
foo(); //Referrence Error