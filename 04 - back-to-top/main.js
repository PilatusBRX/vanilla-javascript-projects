const toTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if(window.pageYOffset > 100){
    toTop.classList.add("active");
  }else{
    toTop.classList.remove("active");
  }
})