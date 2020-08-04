let slideIndex = 0; //a primeira imagem/first image
const showSlides = () => {
  const slides = document.getElementsByClassName("mySlides");

    for (let i=0; i < slides.length; i++){
    slides[i].style.display="none";
  }
  slideIndex++;

  if(slideIndex > slides.length){
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block"; //atual/current

/***  dot  *****/
 const dot = document.getElementsByClassName("dot");

  for(let i = 0; i < dot.length; i++){
    dot[i].className = dot[i].className.replace(" active", "");
  }
  dot[slideIndex - 1].className += " active";

   setTimeout(showSlides, 4000);
}
showSlides();


//	x += y	x = x + y