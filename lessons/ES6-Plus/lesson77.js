// Destructuring Objects

const fullName = {
    firstName: 'Mohammad',
    lastName: 'Tasib',
}

const { firstName, lastName } = fullName;
console.log(fullName);
console.log(lastName);

let user = [
    {
        firstName: 'Mohammad',
        lastName: 'Tasib',
    },
    (user) => {
        console.log('i set the user : ', user);
    }
];

const [newUser, setUser] = user;
console.log(newUser);
setUser({ firstName: 'Ohidul', lastName: 'Alam' });