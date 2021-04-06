// Functions in javascript
/*
1. create function
2. call function
*/

// create
function hello() {
    console.log('Hello World');
}
// call
hello();

/* let's create a function that take in a name and says hello follwed by your name

For example

Name: "Tasib"
return: "Hello Tasib"
*/

function greeting() {
    const name = prompt('What is your name?')
    const result = 'Hello' + ' ' + name;
    console.log(result);
}
greeting();

// How do arguments work in functions?
// how do we add 2 numbers together in a function
function adding(a, b) {
    const result = a + b;
    console.log(result);
}
adding(10, 30);
adding('10', 10);
adding('Hello', ' Tasib');