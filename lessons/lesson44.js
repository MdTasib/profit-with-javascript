// sort best ratings first
// Know max AND it's index

function sortBestRatingsFirst(numbers) {
    for (let j = 0; j < numbers.length - 1; j++) {
        // find max
        let max_num = numbers[j];
        let max_location = j;

        for (let i = j; i < numbers.length; i++) {
            if (numbers[i] > max_num) {
                // know max AND it's index (location)
                max_num = numbers[i];
                max_location = i;
            }
        }
        // swap the first and the last
        numbers[max_location] = numbers[j]; //  ---> 10
        numbers[j] = max_num;
    }
    return numbers;
    // return [max_num, max_location];
}

console.log(sortBestRatingsFirst([5, 3, 7, 2, 6, 9]));