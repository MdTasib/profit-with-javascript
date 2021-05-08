// Iterating

const friends = ['Tasib', 'Rafi', 'Rakib', 'Tawrat', 'Walid'];

// for loop
// console.log('For Loop');
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }


// for of loop
// console.log('For Of Loop');
// for (let value of friends) {
//     console.log(value);
// }


// forEach
// console.log('For Each');
// friends.forEach(value => {
//     console.log(value);
// })


// Map
// console.log('map');
// friends.map(value => {
//     console.log(value);
// })

// map and filter
friendList = friends.map(friend => {
    return friend;
}).filter(value => {
    if (value === 'Tasib') {
        return false;
    } else {
        return true;
    }
})
console.log(friendList);