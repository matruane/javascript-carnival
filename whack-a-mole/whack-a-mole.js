// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

const rows = document.getElementsByTagName('tr')
const rowColLength = rows.length
let board = []

// build representation of board
for (let i = 0; i < rows.length; i++) {
  board.push([...rows[i].cells])
}

const getRandomCell = () => {
  return board[createRandomIndex(rowColLength)][createRandomIndex(rowColLength)]
}

const createRandomIndex = (length) => {
  return Math.floor(Math.random() * length)
}

console.log((getRandomCell().innerText = 'blah'))
