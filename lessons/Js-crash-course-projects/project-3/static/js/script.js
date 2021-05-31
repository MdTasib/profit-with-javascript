function rpsGame(yourChoice) {
    let humanChoice, botChoice;

    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer Choice', botChoice);

    results = decideWinner(humanChoice, botChoice); // [0,1] human lost | bot won
    console.log(results);

    message = finalMessage(results); // {'message': 'You Won', 'color': 'green'}
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
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

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'You Lost!', 'color': 'red' };
    } else if (yourScore === 0.5) {
        return { 'message': 'You Tied!', 'color': 'yellow' };
    } else {
        return { 'message': 'You Won!', 'color': 'green' };
    }
}

// all images
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let container = document.getElementById('container');

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    const imagesDatabe = {
        'rock': rock.src,
        'paper': paper.src,
        'scissors': scissors.src
    }

    // let's remove all the images
    rock.remove();
    paper.remove();
    scissors.remove();

    // create div element
    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = `<img class='humanChoice' src='${imagesDatabe[humanImageChoice]}'>`;
    messageDiv.innerHTML = `<h2 class='message' style='color: ${finalMessage['color']}'>${finalMessage['message']}</h2>`
    botDiv.innerHTML = `<img class='botChoice' src='${imagesDatabe[botImageChoice]}'>`;

    container.appendChild(humanDiv);
    container.appendChild(messageDiv);
    container.appendChild(botDiv);
}