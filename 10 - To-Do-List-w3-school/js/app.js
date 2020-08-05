// Create a new list item when clicking on the "Add" button
const addBtn = document.querySelector('.addBtn');
const shoppingList = document.getElementById("shopping-list");
const form = document.getElementById("#form-list");
const inputValue = document.getElementById("myInput");
const clearBtn = document.querySelector('.addBtn-block');
const filter = document.querySelector('#filter');


loadEvents();

function loadEvents() {
//event listeners
addBtn.addEventListener('click', addItem);
shoppingList.addEventListener('click', checkList);
shoppingList.addEventListener('click', removeList);
clearBtn.addEventListener('click', clearList);
filter.addEventListener('keyup', filterList);


}

// Add a "checked" symbol when clicking on a list item

function checkList(e){
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
      e.preventDefault();
}


function addItem(e) {
    
    const li = document.createElement("li");
    li.className = 'list';
    const inputValue = document.getElementById("myInput").value;
    const shoppingListContent = document.createTextNode(inputValue);
    li.appendChild(shoppingListContent);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        shoppingList.appendChild(li);
    }  
    document.getElementById("myInput").value = "";

    const span = document.createElement("span");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);    

    // Add a "checked" symbol when clicking on a list item
    const list = document.querySelector('ul');
    list.addEventListener('click', function (e) {
        if (e.target.tagName === 'li') {
            e.target.classList.toggle('checked');
        }
    }, false);

    e.preventDefault();
    
}

function removeList(e){
   if (e.target.parentElement.classList.contains('list')) {
       if (confirm('Are you sure ?')) {
           e.target.parentElement.remove();            
       }
    }
   }

   function clearList(){
         shoppingList.innerHTML= '';
         window.location.reload();
        
   }


function filterList(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.list').forEach(function(shop){
        const item = shop.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            shop.style.display = 'block';
        }else{
            shop.style.display = 'none';
        }
    });

}