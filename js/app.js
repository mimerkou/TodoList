const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

function addTodo(e) {
    e.preventDefault();

    if (todoInput.value === '') {
        return;
    }
    
    // Create div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create li
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    // Add todo to the local storage
    saveLocalTodos(todoInput.value);

    // Check mark button
    const completedButton = document.createElement('button');
    completedButton.classList.add('complete-btn');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(completedButton);

    // Trash button
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-btn');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashButton);

    // Append the div to ul list
    todoList.appendChild(todoDiv);

    // Clear todo input value
    todoInput.value = '';
}

function deleteCheck(e) {
    // console.log(e.target);

    // select the item the user clicks on
    const item = e.target;

    // delete todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }

    // check mark
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function saveLocalTodos(todo) {
    // First check if there is something in the local storage
    let todos;

    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    // First check if there is something in the local storage
    let todos;

    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(todo => {
        // Create div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        // Create li
        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item');
        newTodo.innerText = todo;
        todoDiv.appendChild(newTodo);

        // Check mark button
        const completedButton = document.createElement('button');
        completedButton.classList.add('complete-btn');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        todoDiv.appendChild(completedButton);

        // Trash button
        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-btn');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        todoDiv.appendChild(trashButton);

        // Append the div to ul list
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo) {
    // First check if there is something in the local storage
    let todos;

    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}
