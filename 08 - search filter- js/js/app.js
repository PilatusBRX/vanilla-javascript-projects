
//Get input element
let filterValue = document.getElementById('filterInput');

//add event listener
filterValue.addEventListener('keyup', filterNames);

//function
function filterNames(){
	//get value of input
	let filterValue = document.getElementById('filterInput').value.toUpperCase();
	console.log(filterValue);

	//Get names ul
	let ul = document.getElementById('names');
	let li = ul.querySelectorAll('li');

	//Loop through li
	 for(let i = 0; i < li.length; i++){
	 	let a = li[i].getElementsByTagName('a')[0];

	 	//if matched
	 	if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
	 		li[i].style.display = '';
	 	}else{
	 		li[i].style.display = 'none';
	 	}

	 }


}