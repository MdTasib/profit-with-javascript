// Promise

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            firstName: 'Mohammad',
            lastName: 'Tasib'
        });
        reject('Something went wrong');
    }, 1000);
});

promise
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })
console.log('asynchronous programming languages javascript');