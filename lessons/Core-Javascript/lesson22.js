// conditionals, control flows (if else)

// 18-35 is my target demographic
// && AND  
// || OR

let age = prompt('What is your age?');

if ((age >= 18) && (age <= 35)) {
    console.log('Target demo');
} else {
    console.log('Not my audience');
}

// Switch statements
switch (6) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}
console.log(text);