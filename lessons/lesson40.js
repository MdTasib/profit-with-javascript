// check if a string is empty
// '' => true
// 'Somethis like this' => false

function isEmptyString(some_string) {
    if (some_string === '') {
        return true;
    } else {
        return false;
    }
}

console.log(isEmptyString('')); // true
console.log(isEmptyString('Hello')); // false
console.log(isEmptyString('012')); // false