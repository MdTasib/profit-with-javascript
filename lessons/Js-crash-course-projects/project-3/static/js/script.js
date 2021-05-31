function rpsGame(yourChoice) {
    // console.log(yourChoice);

    let humanChoice, botChoice;
    // humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    // console.log(botChoice);
    // results = decideWinner(humanChoice, botChoice); // [0,1] human lost | bot won
    // message = finalMessage(results); // {'message': 'You Won', 'color': 'green'}
    // rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    const rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 },
    }

    const yourScore = rpsDatabase[yourChoice][computerChoice];
    const computerScore = rpsDatabase[computerChoice][yourChoice];
    console.log(yourScore);
    console.log(computerScore);
}