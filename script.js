document.onload = function (){


}();

var input=document.querySelector("input");
var ul=document.querySelector("ul");

var add_todo = document.createElement('BUTTON');
add_todo.setAttribute("id", "add_todo");
add_todo.innerHTML = "ADD TODO";
document.body.appendChild(add_todo);





add_todo.addEventListener("click", function(){
	var text = input.value;
	var li = document.createElement("LI");
	li.innerHTML = text;
	var span = document.createElement('SPAN');
	span.setAttribute("id", "span");
	span.innerHTML = "Delete";
	ul.appendChild(li);
	input.value="";
	li.appendChild(span);
	span.style.float = "right";
	
	span.addEventListener("click", function(){
		var liToDelete = this.parentElement;
		liToDelete.parentElement.removeChild(liToDelete)
	});
	
});

ul.addEventListener("click", function(e){
	if(e.target.className){
		e.target.className = "";
	} else {
	e.target.className = 'completed';
	}
});


