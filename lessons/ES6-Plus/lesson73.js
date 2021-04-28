// Let & Const

function letVarExample() {
    if (true) {
        var firstName = 'Mohammad'; // exists in function scope, defind in var
        let lastName = 'Tasib'; // exists in block scope, defind in let
    }

    console.log('Function Scope Access: ', firstName);
    // console.log('Function Scope Access: ', lastName);
}

letVarExample();

// let -- change value
let name = 'Ohidul Alam';
name = 'Mohammad Tasib';
console.log(name);

// const -- can't change value
const anotherExample = 'Ohidul';
// anotherExample = 'Ohidul Alam'; // error
console.log(anotherExample);

const numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);