const todoInput = document.querySelector(".todo-input");
const todoSubmit = document.querySelector(".todo-submit");
const todoList = document.querySelector(".todo-list");

todoSubmit.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

function addTodo(event) {
  event.preventDefault();
  if (todoInput.value === "") return;

  // Create todo container
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create todo li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");

  todoDiv.appendChild(newTodo);

  // checkmark button
  const completeButton = document.createElement("button");
  completeButton.innerHTML = "<i class='fas fa-check'></i>";
  completeButton.classList.add("complete-button");
  todoDiv.appendChild(completeButton);

  // trash button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "<i class='fas fa-trash'></i>";
  deleteButton.classList.add("delete-button");
  todoDiv.appendChild(deleteButton);

  // Add todo to list
  todoList.appendChild(todoDiv);

  // Reset input
  todoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;

  // delete todo
  if (item.classList[0] === "delete-button") {
    const todo = item.parentElement;

    // Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }

  // checkmark
  if (item.classList[0] === "complete-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
