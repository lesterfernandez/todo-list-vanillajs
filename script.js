const todoInput = document.querySelector(".todo-input");
const todoSubmit = document.querySelector(".todo-submit");
const todoList = document.querySelector(".todo-list");

todoSubmit.addEventListener("click", addTodo);

function addTodo(event) {
  event.preventDefault();
}
