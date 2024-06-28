document.addEventListener('DOMContentLoaded', function() {
let images = ['https://t4.ftcdn.net/jpg/02/71/54/65/240_F_271546502_wj0aLUpl7Djkbitfcdw6fLglsLXoYVZK.jpg',
    'https://t4.ftcdn.net/jpg/02/04/36/61/240_F_204366124_QQr9fVw89FsQpu1hvs9RUb2NvjzCRcCi.jpg',
    'https://t4.ftcdn.net/jpg/04/45/66/39/240_F_445663915_O6BXSQLdwLwx4UUDQKC4NkKZu7vrS1gN.jpg',
    'https://t4.ftcdn.net/jpg/01/08/28/99/240_F_108289994_xL22c31IGLPIY4YVINxQlsQod9j9gQJT.jpg',
    'https://t4.ftcdn.net/jpg/01/59/66/65/240_F_159666505_54721alopdQ3Uf647wL3dw5uQbPbnbJi.jpg',
    'https://t4.ftcdn.net/jpg/01/32/94/47/240_F_132944706_JMDLcfC0HcQaY5ozM53IXNg8SQqQMWQV.jpg',
    'https://t3.ftcdn.net/jpg/08/07/44/34/240_F_807443432_OkKH95PoGj7XgajN6zHIsMJGpWkuCTcW.jpg',
    'https://t4.ftcdn.net/jpg/07/18/33/51/240_F_718335193_hUilz4XmED74Rnjzv5ERJ1Gmhjh6xcZr.jpg'
];

// doubles amount of images
images = images.concat(images);



function shuffleArray(arr) {
    for(let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };
};

shuffleArray(images);

const cards = document.querySelectorAll('.cardSurface');
let flippedCard = [];
let moveCounter = document.querySelector('.count');
let moves = 0;

// Adds card click functionality
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function() {
        if (flippedCard.length < 2) {
            this.classList.toggle('flipped');
    
            this.querySelector('.cardBack').style.backgroundImage = 'url(' + images[i] + ')';
            flippedCard.push(this);

            moves++;
            moveCounter.textContent = " " + moves;
            

            

            let card1 = flippedCard[0].querySelector('.cardBack').style.backgroundImage;
            let card2 = flippedCard[1].querySelector('.cardBack').style.backgroundImage;
            // Prevents more than two cards from being flipped, unless thay are a match.
            // In which case they stay flipped up.
            if(flippedCard.length === 2) {
                setTimeout(() => {
                    if ( card1 !== card2 ) {
                        //Will flip the cards back over with a 1 second delay if they are not a match. 
                      flippedCard[0].classList.remove('flipped');
                      flippedCard[1].classList.remove('flipped'); 
                    }
                    flippedCard = [];
                }, 1000);
                
            }

            let allFlipped = Array.from(cards).every(card => card.classList.contains('flipped'));
            if (allFlipped) {
                let revealed = document.querySelectorAll('.flipped');
                revealed.forEach(card =>{
                    card.classList.remove('flipped');
                });
                alert ('You Win!');               
            }
        }
    });
};
});



