const cardArray = [
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png",
    },
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png",
    },
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
]

cardArray.sort(() => Math.random() - 0.5)

const boardDisplay = document.querySelector('.grid')
let clickedCards = [] //card names (hamburher, icecream)
let clickedCardsIds = [] //card id's: 1,,2,3,4,5 ...
let foundPairs = []
let result = document.querySelector("#score")

function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        boardDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
const cards = document.querySelectorAll('img')
const firstItemChosen = clickedCardsIds[0] 
const secondItemChosen = clickedCardsIds[1] 

if(firstItemChosen === secondItemChosen) {
    alert("oops, you clicked on the same card twice")
    cards[firstItemChosen].setAttribute('src', 'images/blank.png')
    cards[secondItemChosen].setAttribute('src', 'images/blank.png')
}
 else if(clickedCards[0] === clickedCards[1]) {
    cards[firstItemChosen].setAttribute('src', 'images/white.png')
    cards[secondItemChosen].setAttribute('src', 'images/white.png')
    cards[firstItemChosen].removeEventListener('click', flipCard)
    cards[secondItemChosen].removeEventListener('click', flipCard)
    foundPairs.push(clickedCards)

} else {
    cards[firstItemChosen].setAttribute('src', 'images/blank.png')
    cards[secondItemChosen].setAttribute('src', 'images/blank.png')
}
    clickedCards = []
    clickedCardsIds = []

if(foundPairs.length == (cardArray.length)/2) {
    alert("congradulations, you found them all!")
}
result.innerHTML = foundPairs.length
}


function flipCard(){
    const cardId = this.getAttribute('data-id') //0, 1, 2, 3 ,4 ,5 ...
    clickedCards.push(cardArray[cardId].name)
    clickedCardsIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)

    if(clickedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

