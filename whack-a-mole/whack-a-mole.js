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

// Add sound effect
const whackAudio = new Audio()
whackAudio.src = './whack-audio.wav'

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
  const parent = e.target.parentElement
  let newCell

  const audioInstance = whackAudio.cloneNode()
  audioInstance.play()

  // Keep getting a random cell until its not the current cell
  while ((newCell = getRandomCell()) === parent) {}

  parent.removeChild(mole)
  addMoleTo(newCell)
}

mole.addEventListener('click', whackedMole)
addMoleTo(getRandomCell())
