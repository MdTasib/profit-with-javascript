// Max number in Array

// [5, 2, 9, 8, 7, 3] - 9
// [5, 6, 9, 8, 7, 13] - 13

function maxNumber(numbers) {
    let maximum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
        }
    }
    return maximum;
}

console.log(maxNumber([5, 2, 9, 8, 7, 3])) // 9
console.log(maxNumber([5, 2, 9, 8, 7, 13])) // 13