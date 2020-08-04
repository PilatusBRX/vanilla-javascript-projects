// step 1:

// const current = document.querySelector('#current');
// const imgs = document.querySelectorAll('.imgs img');
//const opacity = 0.4;

// imgs.forEach((img) => img.addEventListener('click', imgClick));

// function imgClick(e) {
//   //change current image to src of  clicked image
//   current.src = e.target.src;

// }

// step 2:

const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

imgs.forEach((img) => img.addEventListener('click', imgClick));

function imgClick(e) {
  // step 1:
  //Reset the opacity
  imgs.forEach((img) => (img.style.opacity = 1));

  // step 2:
  //change current image to src of  clicked image
  current.src = e.target.src;

  // step 3:
  //change the opacity to opacity var
  e.target.style.opacity = 0.55;

  // step 4:
  // add fade in class
  current.classList.add('fade-in');

  // step 5:
  // Remove fade-in class afetr .5 seconds
  setTimeout(() => current.classList.remove('fade-in'), 500);
}
