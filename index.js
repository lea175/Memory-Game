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

//1. make object CHECK
//2. diplay blank images in a grid 
//loop over the CardArray and for each index position append one card



let boardDisplay = document.querySelector('.grid')
let card

function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('id', i)
        console.log(card);
        boardDisplay.appendChild(card)
    }
}

createBoard()

