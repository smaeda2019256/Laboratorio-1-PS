const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const prioritySelect = document.getElementById('priority-select');
const todoList = document.getElementById('todo-list');

let todos = [];

function renderTodos() {
  todoList.innerHTML = '';

  todos.sort((a, b) => {
    const priorityOrder = { 'Alta': 1, 'Media': 2, 'Baja': 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  todos.forEach((todo, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${todo.text}</td>
      <td>${todo.priority}</td>
      <td><button class="edit-button" data-index="${index}">Editar</button></td>
      <td><button class="delete-button" data-index="${index}">Eliminar</button></td>
    `;
    todoList.appendChild(row);
  });
}

function addTodo() {
  const text = todoInput.value.trim();
  const priority = prioritySelect.value;

  if (text !== '') {
    const todo = {
      text,
      priority
    };
    todos.push(todo);
    renderTodos();
    todoInput.value = '';
  } else {
    alert('¡Por favor, tienes ingresar una Tarea!');
  }
}


