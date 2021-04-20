// Basic JSON
const students = `
[
    {
        "name": "Tasib",
        "age": 19
    },
    {
        "name": "Rafi",
        "age": 21
    }
]
`
console.log(students);
console.log(JSON.parse(students));
console.log(JSON.parse(students)[0].name);