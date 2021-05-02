// template literals

const firstName = 'Mohammad';
const lastName = 'Tasib';

// const fullName = firstName + ' ' + lastName;
const fullName = `${firstName} ${lastName}`;
// console.log(fullName); // Mohammad Tasib

const searchResults = 1;
const output = `${searchResults > 0 ? `${searchResults} results` : 'No Search Results'}`;
console.log(output);