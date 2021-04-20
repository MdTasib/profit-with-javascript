// Array in javascript
let skills = ['Html', 'css', 'sass', 'lass'];
let mySkills = new Array('Html', 'css', 'sass', 'lass');

console.log('skills', skills);
console.log('mySkills', mySkills);

console.log(skills[0]); // access value at index 3rd

mySkills[3] = 'Javascript';
console.log(mySkills);

// for loops
for (let i = 0; i < mySkills.length; i++) {
    console.log(mySkills[i]);
}

// array common methods
console.log('to string : ', skills.toString());
console.log('join : ', skills.join(' - '));
console.log('pop : ', skills, skills.pop(), skills); // remove last item
console.log('push : ', skills, skills.push('javascript'), skills); // appends last item
console.log(skills[3]);
skills[skills.length] = 'React js';
console.log(skills);
console.log('shift : ', skills.shift(), skills);
console.log('unshift : ', skills.unshift('Typeing'), skills);
console.log('concat', skills.concat(mySkills));
console.log(skills.reverse());

const letter = ['b', 'a', 'c'];
console.log(letter);
console.log(letter.sort());

const numbers = [2, 1, 4, 66, 33, 55, 22, 11, 3, 6, 8, 9, 544, 68];
console.log(numbers);
console.log(numbers.sort());
console.log(numbers.sort(function (a, b) { return a - b })); // small number to big number
console.log(numbers.sort(function (a, b) { return b - a })); // big number to small number


let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);