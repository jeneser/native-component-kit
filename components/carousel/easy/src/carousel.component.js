export default function() {
  var pre = document.querySelector('.carousel-easy__arrow--left')
  var next = document.querySelector('.carousel-easy__arrow--right')

  var counter = 0
  var carouselItems = document.querySelectorAll('.carousel-easy__item')
  var amount = carouselItems.length
  var current = carouselItems[0]

  function navigate(direction) {

    current.classList.remove('is-current')

    counter = counter + direction

    if(direction === -1 && counter < 0) {
      counter = amount - 1
    }

    if(direction === 1 && !carouselItems[counter]) {
      counter = 0
    }

    current = carouselItems[counter]
    current.classList.add('is-current')
  }

  pre.addEventListener('click', function () {
    navigate(-1)
  });
  next.addEventListener('click', function() {
    navigate(1)
  })

  navigate(0)

  setInterval(function () {
    navigate(1)
  }, 2000)

}
