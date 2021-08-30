// selecting required element
const ulTag = document.querySelector("ul");

function element(totalPages, page){
	let liTag = '';
	if(page > 1){ //if page value is greater than 1 then add new li which is previous button
		liTag = "<li class="btn-pagination prev"><span><i class="fas fa-angle-left"></i>Prev</span></li>";
	}
	if(page < totalPages){ //if page value is less than totalPages value then add new li which is next button
		liTag = "<li class="btn-pagination prev"><span><i class="fas fa-angle-left"></i>Prev</span></li>";
	}
	ulTag.innerHTML = liTag;
}
element(20, 5); // calling above function with passing values
