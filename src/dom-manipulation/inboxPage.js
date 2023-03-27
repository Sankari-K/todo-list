import { exitToDoInput } from "./createToDo";
import { Projects } from "../modules/projects";
import { createToDoDOM } from "./createToDo";
import { exitEditForm } from "./editToDo";

const createTitle = (name) => {
    let contentContainer = document.querySelector('.content');
    contentContainer.querySelector('span').textContent = name;
}

const showInbox = () => {
    let projectName = "Inbox";
    
    // create the title
    createTitle(projectName);
    // in case the todo-creator was opened by any other project
    exitToDoInput();
    // in case the todo-editor was opened by any other project
    exitEditForm();

    // clear anything else in the content
    let todoContainer = document.querySelector('.todos');
    todoContainer.innerHTML = "";
    
    // show ALL todos
    for (const project in Projects.projectList) {
        // project has the project names
        for (const todo of Projects.projectList[project].todos) {
            let newToDo = createToDoDOM(todo);
            todoContainer.appendChild(newToDo);
        }
    }
}

export {
    createTitle,
    showInbox
}