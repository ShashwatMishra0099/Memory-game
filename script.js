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

// Assign images to cards
const cards = document.querySelectorAll('.cards');
cards.forEach((card, index) => {
    card.style.backgroundImage = `url(${duplicateCardsData[index].imgSrc})`;
});
