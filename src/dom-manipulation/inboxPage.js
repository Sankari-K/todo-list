import { exitToDoInput } from "./createToDo";
import { createToDoDOM } from "./createToDo";
import { exitEditForm } from "./editToDo";

const createTitle = (name) => {
    let contentContainer = document.querySelector('.content');
    contentContainer.querySelector('span').textContent = name;
}

const showInbox = (projectData) => {
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
    console.log(projectData)
    for (const project in projectData.projectList) {
        // project has the project names
        for (const todo of projectData.projectList[project].todoList) {
            let newToDo = createToDoDOM(todo, projectData);
            todoContainer.appendChild(newToDo);
        }
    }
}

export {
    createTitle,
    showInbox
}