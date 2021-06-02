// Blackjack challenge start here

const blackjackGame = {
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

// Audio sound
const hitSound = new Audio('assets/sounds/hit.wav');

// All blackjack buttons
document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit() {
    showCard(YOU);
}

function showCard(activePlayer) {
    let cardImage = document.createElement('img');
    cardImage.src = 'assets/images/q.png';
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
}

function blackjackDeal() {
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');

    for (let i = 0; i < yourImages.length; i++) {
        yourImages[i].remove();
    }
}