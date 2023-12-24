
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

const titleform = document.querySelector('.title').value;
const descriptionform = document.querySelector('.description').value;
const duedateform = document.querySelector('.duedate').value;
const todo_ul_container = document.querySelector('.todo-ul-container');
const button = document.getElementById('button');

const todo = new Todo(titleform, descriptionform, duedateform);

function createTodo(e){
    e.preventDefault();
    const obj = {
        title: titleform,
        description: descriptionform,
        duedate: duedateform
    }

    const todo = new Todo(titleform, descriptionform, duedateform);
    console.log(obj)
    
}

function createTodoList(e){
    e.preventDefault();
    createTodo();
    // for(const key in todo){
    //     todo_ul_container.innerHTML += `<li>${todo[key]}</li>`;
    //     console.log(todo[key]);
    // }
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    const titleform = document.querySelector('.title').value;
    const descriptionform = document.querySelector('.description').value;
    const duedateform = document.querySelector('.duedate').value;

    const obj = {
        title: titleform,
        description: descriptionform,
        duedate: duedateform
    }

    const todo = new Todo(titleform, descriptionform, duedateform);
    todo_ul_container.innerHTML += `<li>${todo}</li>`;
});