// Min number in Array

// [5, 2, 9, 8, 7, 3] - 2
// [5, 6, 9, 8, 7, 3] - 3

function findMin(numbers) {
    let minNumber = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < minNumber) {
            minNumber = numbers[i]
        }
    }
    return minNumber;
}

console.log(findMin([5, 2, 9, 8, 7, 3])); // 2
console.log(findMin([5, 6, 9, 8, 7, 3])); // 3