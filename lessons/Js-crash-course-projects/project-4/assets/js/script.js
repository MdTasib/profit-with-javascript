// Blackjack challenge start here

const blackjackGame = {
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
    'cards': ['2', '3', '3', '5', '6', '7', '8', '9', '10', 'k', 'j', 'q', 'a'],
    'cardsMap': { '2': 2, '3': 3, '3': 3, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'k': 10, 'j': 10, 'q': 10, 'a': [1, 11] },
}

// Player
const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

// Audio sound
const hitSound = new Audio('assets/sounds/hit.wav');
const winSound = new Audio('assets/sounds/win.mp3');
const lostSound = new Audio('assets/sounds/lost.wav');

// All blackjack buttons
document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit() {
    let card = randomCard();
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
    console.log(YOU['score']);
}

// randomly apply card
function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

// Display card
function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `assets/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

// Deal button
function blackjackDeal() {
    let winner = computeWinner();
    showResult(winner);

    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

    // your box all cards remove()
    for (let i = 0; i < yourImages.length; i++) {
        yourImages[i].remove();
    }
    // dealer box all cards remove()
    for (let i = 0; i < dealerImages.length; i++) {
        dealerImages[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').textContent = 0;

    document.querySelector('#your-blackjack-result').style.color = 'white';
    document.querySelector('#dealer-blackjack-result').style.color = 'white';
}

// Score update
function updateScore(card, activePlayer) {
    if (card === 'a') {
        // If adding 11 keeps me below 21, add 11. Otherwise, add 1.
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1]; // 11
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0]; // 1
        }

    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

// Display score
function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

// Dealer
function dealerLogic() {
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
}

// compute winner and return who just won
function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
        // condition: higher score then dealer or dealer busts but you're 21 or under
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            console.log('you won');
            winner = YOU;

        } else if (YOU['score'] < DEALER['score']) {
            console.log('you lost');
            winner = DEALER;

        } else if (YOU['score'] === DEALER['score']) {
            console.log('You Drew');
        }

        // condition: when user busts but dealer doesn't
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        console.log('You lost');
        winner = DEALER;

        // condition: when you and the dealer busts
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        console.log('You drew');
    }

    console.log('winner is', winner);
    return winner;
}

// blackjact result
function showResult(winner) {
    let message, messageColor;

    if (winner === YOU) {
        message = 'You Won!';
        messageColor = 'green';
        winSound.play();
    } else if (winner === DEALER) {
        message = 'You Lost!';
        messageColor = 'red';
        lostSound.play();
    } else {
        message = 'You Drew!';
        messageColor = 'yellow';
    }

    document.querySelector('#balckjack-result').innerText = message;
    document.querySelector('#balckjack-result').style.color = messageColor;
}