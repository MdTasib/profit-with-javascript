// convert your age in seconds
// age * months * days * hours * minutes * seconds
/*
months - 12
days - 30
hours - 24
minutes - 60
seconds - 60
*/

function yourAgeInSeconds(yourAge) {
    return yourAge * 12 * 30 * 24 * 60 * 60;
}

console.log(yourAgeInSeconds(1));
console.log(yourAgeInSeconds(19));