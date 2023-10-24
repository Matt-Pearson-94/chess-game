const gameboard = document.querySelector("#gameboard")
const playerDisplay = document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")

width = 8

const startPieces = [
    castle, knight, bishop, queen, king, bishop, knight, castle,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn, 
    ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 
    ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 
    ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 
    ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn, 
    castle, knight, bishop, queen, king, bishop, knight, castle,
]

function createBoard() {
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.setAttribute('square-id', i)
        square.innerHTML = startPiece
        gameboard.append(square)
        const row = Math.floor((63 - i) / 8) + 1
        if (row % 2 === 0) {
            square.classList.add(i % 2 === 0 ? "white" : "black")
        } else {
            square.classList.add(i % 2 === 0 ? "black" : "white")  
        }
        if (i <= 15) {
            square.firstChild.firstChild.classList.add('colour-one')
        } 
        if (i >= 48) {
            square.firstChild.firstChild.classList.add('colour-two')
        }
    })
}

createBoard()