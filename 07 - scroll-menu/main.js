const Header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if(window.pageYOffset > 100){
    Header.classList.add("active");
  }else{
    Header.classList.remove("active");
  }
})