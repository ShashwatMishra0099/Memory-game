// Array to store card data
const cardsData = [
    { id: 1, imgSrc: 'bomb.png' },
    { id: 2, imgSrc: 'japanese_ogre.png' },
    { id: 3, imgSrc: 'new_moon_with_face.png' },
    { id: 4, imgSrc: 'full_moon_with_face.png' }
];

// Duplicate the cards data to create pairs
const duplicateCardsData = [...cardsData, ...cardsData];

// Function to shuffle array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle card data
shuffle(duplicateCardsData);

// Get the memory game container
const memoryGame = document.querySelector('.memory-game');

// Create card elements and append to memory game container
duplicateCardsData.forEach(cardData => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');
    
    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    
    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    cardBack.style.backgroundImage = `url(${cardData.imgSrc})`;
    
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    memoryGame.appendChild(card);

    // Add click event listener for flipping the card
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    });
});
