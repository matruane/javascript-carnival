// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
const unicorns = document.querySelectorAll('.inflate-an-image')

const inflate = (e) => {
  // find the index of unicorn number
  let idx = e.target.src.indexOf('unicorn-') + 'unicorn-'.length

  // find the number of the unicorn clicked
  let num

  unicorns.forEach((unicorn, idx) => {
    if (unicorn === e.target) {
      num = idx + 1
    }
  })

  if (e.target.src[idx] < 3) {
    e.target.src = `./images/unicorn-${Number(e.target.src[idx]) + 1}.png`
  } else {
    alert(`Unicorn number ${num} says thank you!`)
  }
}

unicorns.forEach((unicorn) => {
  unicorn.onclick = inflate
})
