var accordionButtons = document.getElementsByClassName("accordion-button");

for (var i = 0; 1 < accordionButtons.length; i++){
 accordionButtons[i].onclick = function(){
   this.classList.toggle('is-open');
  var content = this.nextElementSibling;
  if(content.style.maxHeight){
    //accordionButton is open, we need to close it.
    content.style.maxHeight = null;
  }else{
    // accordion is closed 
    content.style.maxHeight = content.scrollHeight + "px";
  }
 }
}