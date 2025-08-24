
const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
    fetch(apiURL + '?_limit=10')
        .then(response => response.json())
        .then(data => {
           data.forEach((todo) => addTodoToDOM(todo));
        })
        .catch(error => console.error('Error fetching todos:', error));
};

const addTodoToDOM = (todo) => {

    const div = document.createElement('div');
    div.appendChild(document.createTextNode(`${todo.title}`));
    div.setAttribute('data-id', todo.id);

    if (todo.completed) {
        div.style.textDecoration = 'line-through';
    }

    document.getElementById('todo-list').appendChild(div);
}

const createTodo = (e) => {
    e.preventDefault();

    const newTodo = {
        title: e.target.firstElementChild.value,
        completed: false
    }

    fetch(apiURL, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => {
        addTodoToDOM(data);
        e.target.firstElementChild.value = '';
    })
    .catch(error => console.error('Error creating todo:', error));
}

const init = () => {
    document.addEventListener('DOMContentLoaded', getTodos);
    document.querySelector('#todo-form').addEventListener('submit', createTodo);
}

init();