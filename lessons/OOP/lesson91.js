// Class Inheritance

class User {
    constructor(first, last, hobbies) {
        this.first = first;
        this.last = last;
        this.hobbies = hobbies;
    }

    getFullName = () => {
        return `${this.first} ${this.last}`;
    }
}

class AdminUser extends User {
    setPassword = (password) => {
        this.password = password;
    }
}

// User
const Tasib = new User('Mohammad', 'Tasib', ['coding']);
console.log('Tasib', Tasib);

// AdminUser
const Rafi = new AdminUser('Shajalal', 'Rafi', ['Travelling', 'coding']);
console.log('Rafi', Rafi);