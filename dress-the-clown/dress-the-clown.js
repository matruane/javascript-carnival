// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

const clownHead = document.querySelector('.dress-an-image.head')
const clownBody = document.querySelector('.dress-an-image.body')
const clownShoes = document.querySelector('.dress-an-image.shoes')

let clothingTypeIndex = 0
const clothingIndices = [3, 4, 4] // [0] = head, [1] = body, [2] = shoes

const changeClothingType = (direction) => {
  if (direction === 'down') {
    clothingTypeIndex >= 2 ? (clothingTypeIndex = 0) : clothingTypeIndex++
  } else if (direction == 'up') {
    clothingTypeIndex <= 0 ? (clothingTypeIndex = 2) : clothingTypeIndex--
  }
}

const changeClothes = (type, direction) => {
  if (direction === 'forward') {
    clothingIndices[type] >= 5
      ? (clothingIndices[type] = 0)
      : clothingIndices[type]++
  } else if (direction === 'backward') {
    clothingIndices[type] <= 0
      ? (clothingIndices[type] = 5)
      : clothingIndices[type]--
  }

  clownHead.src = `./images/head${clothingIndices[0]}.png`
  clownBody.src = `./images/body${clothingIndices[1]}.png`
  clownShoes.src = `./images/shoes${clothingIndices[2]}.png`
}

document.addEventListener('keydown', (e) => {
  e.preventDefault()
  switch (e.code) {
    case 'ArrowUp':
      changeClothingType('up')
      break
    case 'ArrowDown':
      changeClothingType('down')
      break
    case 'ArrowLeft':
      changeClothes(clothingTypeIndex, 'backward')
      break
    case 'ArrowRight':
      changeClothes(clothingTypeIndex, 'forward')
      break
  }
})
