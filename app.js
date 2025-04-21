// app.js

const todoForm = getElement('#todo-form');
const todoInput = getElement('#todo-input');
const todoList = getElement('#todo-list');

let todos = [];

// Render the current list of todos
function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = createElement('li');
    const span = createElement('span', '', todo);
    const deleteBtn = createElement('button', '', '❌');

    deleteBtn.addEventListener('click', () => deleteTodo(index));
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

// Add a new todo item
function addTodo(e) {
  e.preventDefault();
  const task = todoInput.value.trim();
  if (task) {
    todos.push(task);
    todoInput.value = '';
    renderTodos();
  }
}

// Delete a todo item by index
function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

// Event listener for form submission
todoForm.addEventListener('submit', addTodo);

// Render todos on page load
document.addEventListener('DOMContentLoaded', renderTodos);
