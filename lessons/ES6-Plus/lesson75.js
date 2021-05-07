// Arrow functions

const firstName = 'Mohammad';
const lastName = 'Tasib';

getFullName = (firstName, lastName) => console.log(`${firstName} ${lastName}`);
getFullName(firstName, lastName);

// Default Parameters
sortBy = (sortType = 'Name', users) => {
    console.log('Sorting By : ', sortType);
}
sortBy();
sortBy('Date', []);