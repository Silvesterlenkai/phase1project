document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('todoInput');
    const addButton = document.querySelector('.btn');
    const todoList = document.getElementById('todoList');
    const todoCount = document.getElementById('todoCount');
    const deleteButton = document.getElementById('deleteButton');

    let todos = [];

    // Function to render todos
    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.textContent = todo;
            li.dataset.index = index;
            todoList.appendChild(li);
        });
        todoCount.textContent = todos.length;
    }

    // Function to add a todo
    function addTodo() {
        const todoText = inputField.value.trim();
        if (todoText !== '') {
            todos.push(todoText);
            inputField.value = '';
            renderTodos();
        }
    }

    // Function to delete a todo
    function deleteTodo(index) {
        todos.splice(index, 1);
        renderTodos();
    }

    // Event listener for the add button
    addButton.addEventListener('click', addTodo);

    // Event listener for the delete button
    deleteButton.addEventListener('click', () => {
        todos = [];
        renderTodos();
    });

    // Event delegation for deleting individual todos
    todoList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const index = event.target.dataset.index;
            deleteTodo(index);
        }
    });
});
