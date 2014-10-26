function Todo (desc) {
	this.desc = desc;
	this.done = false;
	this.ID = id;
	id++;
	this.getHTML = function () {
		var s = "<tr id='" + this.ID+ "'><td><input type='checkbox' onclick=\"change_state("+this.ID+");\""
		if(this.done) s+= 'checked';
		s += "></td><td>" + this.desc + "</td>";
		return s;
	};
}
function change_state (id) {
	var object = getById(id);
	object.done = !object.done;
}
function add () {
	var todo = new Todo(document.getElementById("todo-input").value);
	document.getElementById("todo-input").value = '';
	todos.push(todo);
	var table = document.getElementById("todo-list");
	table.innerHTML += todo.getHTML();
}
function remove() {
	todos2 = []
	var table = document.getElementById("todo-list");
	table.innerHTML = ''
	for (var i = 0; i < todos.length; i++) {
		if (!todos[i].done) {
			todos2.push(todos[i]);
			table.innerHTML += todos[i].getHTML();
		}
	};
	todos = todos2;

}
function getById(id) {
    return todos.filter(function(obj) {
      if(obj.ID == id) {
        return obj 
      }
    })[0]
}

window.onload = function (argument) {
	document.getElementById('add').addEventListener('click',add);
	document.getElementById('remove').addEventListener('click',remove);

	todos = [];
	id = 0;
};

