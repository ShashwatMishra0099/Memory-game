// Array to store card data
const cardsData = [
    { id: 1, imgSrc: 'bomb.png' },
    { id: 2, imgSrc: 'japanese_ogre.png' },
    { id: 3, imgSrc: 'new_moon_with_face.png' },
    { id: 4, imgSrc: 'full_moon_with_face.png' }
];

// Function to shuffle array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the card elements
const cardElements = Array.from(document.querySelectorAll('.card'));
shuffle(cardElements);
cardElements.forEach(card => document.querySelector('.memory-game').appendChild(card));

// Get the memory game container
const memoryGame = document.querySelector('.memory-game');

// Variables to track the game state
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// Function to handle card flip
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('is-flipped');

    if (!hasFlippedCard) {
        // First card flip
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    // Second card flip
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
}

// Function to check if cards match
function checkForMatch() {
    const isMatch = firstCard.dataset.id === secondCard.dataset.id;
    isMatch ? disableCards() : unflipCards();
}

// Function to disable cards
function disableCards() {
    lockBoard = true;
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    firstCard.classList.add('slide-down');
    secondCard.classList.add('slide-down');

    setTimeout(() => {
        firstCard.style.visibility = 'hidden';
        secondCard.style.visibility = 'hidden';
        resetBoard();
    }, 1000);
}

// Function to unflip cards
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('is-flipped');
        secondCard.classList.remove('is-flipped');
        resetBoard();
    }, 1000);
}

// Function to reset the board state
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Add event listeners to each card
document.querySelectorAll('.card').forEach(card => {
    const cardId = card.dataset.id;
    const cardData = cardsData.find(data => data.id == cardId);

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');

    const cardImage = document.createElement('img');
    cardImage.src = cardData.imgSrc;
    cardImage.classList.add('card-image'); // Add a class for the image

    cardBack.appendChild(cardImage);

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    card.addEventListener('click', flipCard);
});

// Start screen functionality
const startScreen = document.querySelector('.start-screen');
const playButton = document.querySelector('.play-button');

playButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
});
