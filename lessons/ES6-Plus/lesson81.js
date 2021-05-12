// Fetching Data From API (AJEX)

const userPromise = fetch('https://randomuser.me/api');
// console.log(userPromise);
userPromise
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.results[0]);
        console.log(data.results[0].name.first + ' ' + data.results[0].name.last);
    })
    .catch(error => {
        console.log('Something went wrong');
        console.log(error);
    })