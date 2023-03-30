import { createTitle } from "../dom-manipulation/inboxPage"
import { exitToDoInput, createToDoDOM } from "../dom-manipulation/createToDo";
import { exitEditForm } from "../dom-manipulation/editToDo";

const checkCompleted = () => {
    let todoContainer = document.querySelector('.todos').childNodes;
    todoContainer.forEach(todo => {
        // remove the todo if it is not completed
        if (todo.classList.contains('todo')) {
            // find todo object
            let todoObj = todo.querySelector('input');
            if (todoObj.checked == false) {
                todo.remove();
            }
        };
    });
}

const showCompleted = (projectData) => {
    createTitle('Completed projects');
    // in case the todo-creator was opened by any other project
    exitToDoInput();
    // in case the todo-editor was opened by any other project
    exitEditForm();

    // clear anything else in the content
    let todoContainer = document.querySelector('.todos');
    todoContainer.innerHTML = "";

    // this is only for displaying
    // disable the create todo option
    document.querySelector('#create-todos').style.display = "none";

    for (const project in projectData.projectList) {
        // project has the project names
        for (const todo of projectData.projectList[project].todoList) {
            if (todo.done == true) {
                let newToDo = createToDoDOM(todo, projectData);
                todoContainer.appendChild(newToDo);
            }
        }
    }

    if (todoContainer.innerHTML == "") {
        todoContainer.innerHTML = '<div class="done">No tasks completed yet!</div>';
    }
}

export {
    showCompleted,
    checkCompleted
}