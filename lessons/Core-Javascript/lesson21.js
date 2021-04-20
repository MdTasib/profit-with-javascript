// Objects in javascript

let student = {
    first: 'Mohammad',
    last: 'Tasib',
    age: 19,
    nickName: 'Ohidul',
    studentInfo: function () {
        return this.first + '\n' + this.last + '\n' + this.age;
    }
}

console.log(student.first);
console.log(student['last']);
student.age++ // increment age
console.log(student.age);
student.nickName = 'Tasib'; // change value
console.log(student.nickName);
console.log(student.studentInfo());
