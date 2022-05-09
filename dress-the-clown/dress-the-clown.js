// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

const clownHead = document.querySelector('.dress-an-image.head')

let headIndex = 0

const changeClownHead = () => {
  headIndex >= 5 ? (headIndex = 0) : headIndex++

  clownHead.src = `./images/head${headIndex}.png`
}

changeClownHead()

document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowRight':
      changeClownHead()
      console.log('ArrowRight press')
      break
  }
})
