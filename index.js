const prompt = require('prompt-sync')();

class Todo{
    constructor(title, description){
        this.title = title;
        this.description = description;
    }

    createaANewTodo(){
        todos.push(this.title);
        todos.push(this.description);
    }

    showTodo(){
        console.log('Title: ', this.title);
        console.log('Description: ', this.description);
    }
}


const todos = [];



const new_todo_title = prompt('Please choose a title for your todo: ');
const new_todo_description = prompt('Please choose a description for your todo: ');
const todo = new Todo(new_todo_title, new_todo_description);


todo.showTodo();
