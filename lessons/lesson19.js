// Strings in javascript ( common methods )
const name = 'javascript';
const skills = 'javascript\nreact' // (\n) new line

console.log(skills);

console.log('Length : ', name.length);
console.log('Index Number (s): ', name.indexOf('s'));
console.log('Index Number (hello): ', name.indexOf('hello'));
console.log('Index Number (script): ', name.indexOf('script'));
console.log('Slice : ', name.slice(4, 10));
console.log('Replace : ', name.replace('javascript', 'React js'));
console.log('UpperCase : ', name.toUpperCase());
console.log('LowerCase : ', name.toLowerCase());
console.log('charAt : ', name.charAt(4));
console.log(' -> ', name[4]);

const mySkills = 'html,css,js,wordpress,react';
console.log('split : ', mySkills.split(',')) // split in a comma