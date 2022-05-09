// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

const clownHead = document.querySelector('.dress-an-image.head')

let headIndex = 0

const changeClownHead = (direction) => {
  if (direction === 'forward') {
    headIndex >= 5 ? (headIndex = 0) : headIndex++
  } else if (direction === 'backward') {
    headIndex <= 0 ? (headIndex = 5) : headIndex--
  }

  clownHead.src = `./images/head${headIndex}.png`
}

document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowLeft':
      changeClownHead('backward')
      break
    case 'ArrowRight':
      changeClownHead('forward')
      break
  }
})
