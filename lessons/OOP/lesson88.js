// Objects

const user = {
    firstName: 'Mohammad',
    lastName: 'Tasib',
    setPassword: (user, password) => {
        user.password = password;
    },
    "user hobbies": [
        'coding',
        'learning'
    ],
    getFullName: (user) => {
        return `${user.firstName} ${user.lastName}`;
    }
}

console.log(user);
console.log(user.getFullName(user));
console.log(user.firstName);
console.log(user["lastName"]);
console.log(user["user hobbies"]);


// if ('firstName' in user) {
//     console.log('First Name exists');
// }

// if ('randomAttr' in user) {
//     console.log('randomAttr exists');
// } else {
//     console.log('randomAttr does not exists');
// }


// for (let prop in user) {
//     // console.log(user.prop);
//     console.log(user[prop]);
// }