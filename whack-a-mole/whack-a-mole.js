// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

const rows = document.getElementsByTagName('tr')
const rowColLength = rows.length
let board = []

// create the mole
const mole = document.createElement('img')
mole.setAttribute('src', './mole.PNG')
mole.setAttribute('id', 'mole')

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

const addMoleTo = (cell) => {
  cell.appendChild(mole)
}

const whackedMole = (e) => {
  e.target.parentElement.removeChild(mole)
  addMoleTo(getRandomCell())
}

mole.addEventListener('click', whackedMole)
addMoleTo(getRandomCell())
