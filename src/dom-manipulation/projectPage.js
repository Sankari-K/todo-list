import { exitToDoInput } from "./createToDo";

const createTitle = (name) => {
    let contentContainer = document.querySelector('.content');
    contentContainer.querySelector('span').textContent = name;
}

const showProjectPage = (e) => {
    let projectName = e.target.innerText;
    console.log(projectName);

    // create the title
    createTitle(projectName);
    // in case the todo-creator was opened by any other project
    exitToDoInput();

    // show all the to-dos under this project 
    let todoContainer = document.querySelector('.todos');
    todoContainer.innerHTML = "";
    
}

export {
    showProjectPage
}