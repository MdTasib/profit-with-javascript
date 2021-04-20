// Movie Rating - Bad or Good Movie
// (1 - 6) -- Bad Movie
// (7 - 10) -- Good Movie

function badOrGoodMovie(movie_rating) {
    let result;
    if (movie_rating >= 7) {
        result = 'Good Movie';
    } else {
        result = 'Bad Movie';
    }
    return result;
}

console.log(badOrGoodMovie(3)); // bad
console.log(badOrGoodMovie(6)); // bad
console.log(badOrGoodMovie(9.4)); // good