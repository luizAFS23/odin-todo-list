
class Todo{
    constructor(title, description, duedate){
        this.title = title;
        this.description = description;
        this.duedate = duedate;
    }

    createaANewTodo(){
        todos.push(this.title);
        todos.push(this.description);
        todos.push(this.duedate);
    }

    showTodo(){
        console.log('Title: ', this.title);
        console.log('Description: ', this.description);
        console.log('Due Date: ', this.duedate);
    }

    toString(){
        return `Title: ${this.title}, Description: ${this.description}, Due Date: ${this.duedate}`;
    }
}

const todos = [];

const titleform = document.getElementById('title').value;
const descriptionform = document.getElementById('description').value;
const duedateform = document.getElementById('duedate').value;
const todo_ul_container = document.querySelector('.todo-ul-container');
const form = document.getElementById('form');

function createTodo(){
    const obj = {
        title: titleform,
        description: descriptionform,
        duedate: duedateform
    }

    const todo = Object.assign({}, obj);
    todos.push(todo);
}

function createTodoList(e){
    e.preventDefault();
    createTodo();
    todos.forEach(todo => {
        todo_ul_container.innerHTML += `<li>${todo}</li>`;
    });
}

form.addEventListener('submit', (e) => createTodoList(e));