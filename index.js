
class Todo{
    constructor(title, description, duedate){
        this.title = title;
        this.description = description;
        this.duedate = duedate;
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


const todo_ul_container = document.querySelector('.todo-ul-container');
const button = document.getElementById('button');


button.addEventListener('click', (e) => {
    e.preventDefault();
    const titleform = document.querySelector('.title').value;
    const descriptionform = document.querySelector('.description').value;
    const duedateform = document.querySelector('.duedate').value;

    const todo = new Todo(titleform, descriptionform, duedateform);
    for(const key in todo){
        todo_ul_container.innerHTML += `<li>${todo[key]}</li>`;
    }
    todo_ul_container.innerHTML += `<br>`
    
});