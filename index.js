const prompt = require('prompt-sync')();

class createTodo{
    constructor(title, description){
        this.title = title;
        this.description = description;
    }

    createaANewTodo(){
        todos.push(this.title);
        todos.push(this.description);
    }

}

class TitleTodo{
    constructor(title){
        this.title = title;
    }

    returnTodoTitle(){
        return this.title;
    }
    
}

class TodoDescription{
    constructor(description){
        this.description = description;
    }

    returnTodoDescription(){
        return this.description;
    }
}

const todos = [];



const new_todo_title = prompt('Please choose a title for your todo: ');
const new_todo_description = prompt('Please choose a description for your todo: ');
const todo = new createTodo(new_todo_title, new_todo_description);

console.log(todo);


