var todos = [];
var action = "";
window.setTimeout(function() {
while(action!=="quit"){
	action = prompt("What would you like to do?");
	if(action=="new"){
		addTodo();
	}
	else if(action=="list"){
		listTodo();
	}
	else if(action=='delete'){
		deleteTodo();
	}
}
console.log("You quit!")
}, 500);

function deleteTodo(){
	var item = prompt("Enter the index of todo to delete");
	console.log("Todo removed: "+todos[item]);
	todos.splice(item,1);
}
function listTodo(){
	console.log("************");
	todos.forEach(function(x,i){
			console.log(i+": "+x);
	});
	console.log("************");
}
function addTodo(){
	var item = prompt("Enter a new todo");
	todos.push(item);
	console.log(item+" added to the list");
}