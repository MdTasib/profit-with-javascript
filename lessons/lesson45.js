// Find  Max Numbers

function findMaxHelper(numbers, start) {
    let maximum = numbers[start];
    for (let i = start; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
            max_location = i;
        }
    }
    return { max_number: maximum, max_index: max_location }
}

console.log(findMaxHelper([3, 2, 5, 1, 7, 5], 0)); // 7
// console.log(findMaxHelper([3, 2, 5, 1, 7, 5], 5)); // 5


// sort
function sortBestWithHelper(numbers) {
    // run as many times as there are items
    for (let j = 0; j < numbers.length - 1; j++) {

        // FInd max number and max location starting from j
        max = findMaxHelper(numbers, j)
        max_num = max['max_number']
        max_location = max['max_index']

        // swap the first and max item in a array
        numbers[max_location] = numbers[j]; //  ---> 10
        numbers[j] = max_num;
    }
    return numbers;
    // return [max_num, max_location];
}

console.log(sortBestWithHelper([5, 3, 7, 2, 6, 9, 1]));