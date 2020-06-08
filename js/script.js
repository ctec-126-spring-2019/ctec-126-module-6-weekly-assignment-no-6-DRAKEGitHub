// script.js
// Weekly Assignment No. 6

/*
* All of the code must be adequetely commented.
* This includes the code that you write and the code that was provided.
*/
// PlayingCard Class to create card objects
class PlayingCard {
    constructor(element, face, suit) {
        // create properties for element, suit, face, img, and state at 0
        this.element = element
        this.suit = suit
        this.face = face
        this.img = `img/${face}_of_${suit}.png`
        this.state = 0
        // add click event listener to element 
        this.element.addEventListener('click', () => {
            // if else if logic to determine element and swap for showing back of card when clicked
            // changes the state of the card when flipped
            if (this.state == 0) {
                this.element.src = this.img
                this.state = 1
            } else if (this.state == 1) {
                this.element.src = 'img/back.png'
                this.state = 0
            }
        })
    }

    showFaces() {
        this.element.src = this.img
    }

    showBacks() {
        this.element.src = 'img/back.png'
    }
}

// function to create the image of the card using image back and returning the image
function createCardImage() {
    /*
    - Create a constant named img and have it create a new img element
    - Set the src property of the img to 'img/back.png'
    - return the img
    */
    const img = document.createElement('img')
    img.surc = 'img/back.png'
    return img
}

function displayDeck() {
    /*
    - Create a loop that iterates through each card in the deck array
    - in the loop, append the card.element to the container
    - Use a forEach with an arrow function
    */
    deck.forEach(card => {
        container.appendChild(card.element
        )
    })
}
// for loop that sorts the deck using math.random
function shuffleDeck() {
    for (let i = 0; i < 1000; i++) {
        deck.sort(() => Math.random() - 0.5)
    }
}

// function to find the card using the query selector and remove it, then shifting the deck until there are no cards left
function removeCard() {
    // if length is not equal to zero, remove card and shift deck
    if (deck.length != 0) {
        card = document.querySelector('img')
        card.remove()
        deck.shift()
        // if zero, display message
        if (deck.length == 0) {
            actions.innerHTML = 'No cards left in the deck. :-('
        }
    }
}
// establish suits and faces in array and use a function to 
function buildDeck() {
    const suits = ['hearts', 'spades', 'diamonds', 'clubs']
    const faces = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']
    // foreach loop to set deck attributes in the createdCardImage function
    suits.forEach(suit => {
        faces.forEach(face => {
            /*
            - Call the createdCardImage() function and assign the return img element to a variable named image
            - Set the id attribute of the image to `${face}_of_${suit}.png`
            - Use the .push method to push a new PlayingCard object into the deck array
            - Do the .push and object creation in a single statement
            */
            const image = createCardImage()
            image.setAttribute('id', `${face}_of_${suit}.png`)
            deck.push(new PlayingCard(image, face, suit))
        })
    })
}

function clearActions() {
    actions.innerHTML = ''
}
// create an array name deck
let deck = []
//define the constants
const container = document.querySelector('#container')
const actions = document.querySelector('#actions')
const shuffleBtn = document.querySelector('#shuffle')
const removeBtn = document.querySelector('#remove')
const newDeckBtn = document.querySelector('#newdeck')
const showFacesBtn = document.querySelector('#showfaces')
const showBacksBtn = document.querySelector('#showbacks')
// add event listeners defined by clicks to associate with the buttons
shuffleBtn.addEventListener('click', () => {
    actions.innerHTML = 'The deck of cards has been shuffled.'
    container.innerHTML = ''
    shuffleDeck()
    setTimeout(displayDeck, 500)
    setTimeout(clearActions, 5000)
})

removeBtn.addEventListener('click', () => {
    actions.innerHTML = 'A card was removed.'
    removeCard()
    setTimeout(clearActions, 5000)
})

newDeckBtn.addEventListener('click', () => {
    actions.innerHTML = 'A new deck of cards has been created.'
    deck = []
    container.innerHTML = ''
    buildDeck()
    setTimeout(displayDeck, 500)
    setTimeout(clearActions, 5000)
})

showFacesBtn.addEventListener('click', () => {
    actions.innerHTML = 'All card faces are now showing.'
    deck.forEach(card => {
        card.showFaces()
    })
})

showBacksBtn.addEventListener('click', () => {
    actions.innerHTML = 'All card backs are now showing.'
    deck.forEach(card => {
        card.showBacks()
    })
})

buildDeck()
shuffleDeck()
displayDeck()