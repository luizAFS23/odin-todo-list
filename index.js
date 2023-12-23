

class createTodo{
    createTodos(){

    }
}

class titleTodo{
    constructor(title){
        this.title = title;
    }

    printTitleTodo(){
        console.log(title);
    }
}

const todos = {
    title: new titleTodo('Comprar castanha')
}

todos.title.printTitleTodo();
