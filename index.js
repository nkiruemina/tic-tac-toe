// We want to be able to start and end a game - so we need a 'start' and an 'end'
// We need to know when a game is on/when it has started.
// We need to identify two players 'x' and 'o' 
// We need a board/grid
// We need to know whose player turn it is
// We need to establish the rules of the game

const testBoxes = document.getElementsByClassName("box")
console.log("html collection: ", testBoxes)

let boxes = Array.from(document.getElementsByClassName("box"))
let gameState = false
let playCounter = 0
const startButton = document.getElementById("start")

const playerOne = "x"
const playerTwo = "o"
let currentPlayer = playerOne

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function checkPlay(item) {
    if (boxes[item[0]].innerText != "" && boxes[item[1]].innerText != "" && boxes[item[2]].innerText != "") {
        let state = false
        if (boxes[item[0]].innerText == boxes[item[1]].innerText && boxes[item[0]].innerText == boxes[item[2]].innerText) {
            state = true
        }
        return state
    }
    return false 
}

// arr[0] == 6
// boxes[arr[0]] = element at position (arr[0] == 6)

// winningConditions.forEach(checkPlayTest)

// function checkPlayTest(item = [6, 7, 8]) {
//     // if(!Array.isArray(item)) {
//     //     return
//     // }
//     if (boxes[item[0]].innerText != "" && boxes[item[1]].innerText != "" && boxes[item[2]].innerText != "") {
//         let check = false
//         if (boxes[item[0]].innerText == boxes[item[1]].innerText && boxes[item[0]].innerText == boxes[item[2]].innerText) {
//             check = true
//         }
//         return check
//     }
//     return false
// }



// item[0] == 6
// boxes[item[0]]

startButton.addEventListener("click", () => gameState = true)

function play() {
    let playValues = []
    if (!gameState) {
        return
    }
    if (this.innerText !== "") { // what object is 'this' referring to? current box clicked - current box is what called the function so 'this' refers to current box
        return
    }
    this.innerText = currentPlayer

    winningConditions.forEach((item) => {
        const currentValue = checkPlay(item)
        playValues.push(currentValue)
    })

    const isWon = playValues.find(value => value == true)
    if (isWon) {
        console.log("The winner is: ", currentPlayer)
        gameState = false
        setTimeout(() => {  // Why is this relevant in the if statement
            boxes.forEach((box) => {
                box.innerText = ""
            })
        }, 3000)
    }
    playCounter += 1
    if (playCounter == 9) { // There are two functions in this if statement. I understand that this changes the gamestate when counter reaches 9 but I don't understand the other function
        gameState = false
        setTimeout(() => {  // Tells the game to reset after all 9 boxes are full
            boxes.forEach((box) => {
                box.innerText = ""
            })
        }, 3000)
    }

    if (currentPlayer == playerOne) {
        currentPlayer = playerTwo
        return
    }
    currentPlayer = playerOne // I understand that this changes the player but at what point logically. Does it reset after the If
}


// boxes.forEach((box, idx) => {
//     // box.addEventListener("click", play) // Telling the box that on click run the 'play' function
//     console.log("box", box)
// })
// boxes.forEach((box)=> box.addEventListener("click", play))
// our grid
// [0, 1, 2]
// [3, 4, 5]
// [6, 7, 8]

// boxes.forEach() | Array.forEach()

function listen(item) {
    item.addEventListener("click", play)
}

boxes.forEach(listen)
// winningConditions.forEach(checkPlayTest)



