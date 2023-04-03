import { exitToDoInput } from "./createToDo";
import { createToDoDOM } from "./createToDo";
import { exitEditForm } from "./editToDo";
import { closeSidenav } from "./menuControls";

const createTitle = (name) => {
    let contentContainer = document.querySelector('.content');
    contentContainer.querySelector('span').textContent = name;
}

const showProjectPage = (e, flag, projectData) => {
    let projectName;
    if (flag) {
        projectName = e.target.innerText;
    }
    else {
        projectName = e;
    }
    // show the content part, in case we're on a small screen
    closeSidenav();

    // create the title
    createTitle(projectName);
    // in case the todo-creator was opened by any other project
    exitToDoInput();
    // in case the todo-editor was opened by any other project
    exitEditForm();

    // show all the to-dos under this project 
    let todoContainer = document.querySelector('.todos');
    // clear anything else first
    todoContainer.innerHTML = "";
    
    for (const todo of projectData.projectList[projectName].todoList) {
        let newToDo = createToDoDOM(todo, projectData);
        todoContainer.appendChild(newToDo);
    }
}

export {
    showProjectPage
}