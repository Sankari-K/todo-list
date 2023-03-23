import { exitToDoInput } from "./createToDo";
import { Projects } from "../modules/projects";
import { createToDoDOM } from "./createToDo";

const createTitle = (name) => {
    let contentContainer = document.querySelector('.content');
    contentContainer.querySelector('span').textContent = name;
}

const showProjectPage = (e) => {
    let projectName = e.target.innerText;

    // create the title
    createTitle(projectName);
    // in case the todo-creator was opened by any other project
    exitToDoInput();

    // show all the to-dos under this project 
    let todoContainer = document.querySelector('.todos');
    // clear anything else first
    todoContainer.innerHTML = "";
    console.log(Projects.projectList[projectName].todos);
    for (const todo of Projects.projectList[projectName].todos) {
        console.log(todo)
        let newToDo = createToDoDOM(todo);
        todoContainer.appendChild(newToDo);
    }
    
}

export {
    showProjectPage
}