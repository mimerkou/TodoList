const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);

function addTodo(e) {
    e.preventDefault();
    
    // Create div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create li
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = 'item 1';
    todoDiv.appendChild(newTodo);

    // Check mark button
    const completedButton = document.createElement('button');
    completedButton.classList.add('complete-btn');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(completedButton);

    // Trash button
    const trashButton = document.createElement('button');
    trashButton.classList.add('complete-btn');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashButton);

    // Append the div to ul list
    todoList.appendChild(todoDiv);
}
