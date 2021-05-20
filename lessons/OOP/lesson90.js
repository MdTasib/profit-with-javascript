// Class and Class Inheritance

class User {
    constructor(firstName, lastName, hobbies) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.hobbies = hobbies;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const Rafi = new User('Shajalal', 'Rafi', ['coding', 'travelling']);
console.log('Rafi', Rafi);
console.log(Rafi.getFullName());

const Tasib = new User('Momahhad', 'Tasib', ['coding', 'learn']);
console.log('Tasib', Tasib);
console.log(Tasib.getFullName());