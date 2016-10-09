document.addEventListener('DOMContentLoaded', function() {
  (function activateLinks() {
    let interval = 1000
    let links = Array.from(document.querySelectorAll('.glitch-text > a'))
    console.log(links)
    links.reverse().forEach((el, index) => {
      let multiplier = ((index + 1) % 2 === 0) ? index * 3 : (index + 2)/2
      console.log(index, multiplier, el)
      setTimeout(() => el.classList.remove('triggered'), interval*multiplier)
    })
  })()
}, false)
