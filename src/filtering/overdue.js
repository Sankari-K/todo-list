import { createTitle } from "../dom-manipulation/inboxPage"
import { exitEditForm } from "../dom-manipulation/editToDo";
import { exitToDoInput, createToDoDOM } from "../dom-manipulation/createToDo";

const checkOverdue = (todoDOM, todoObj) => {

    // remove the todo if it's not overdue
    let today = new Date();
    today.setHours(0,0,0,0);
    var one_day = 1000 * 60 * 60 * 24;
    let dueIn = Math.floor((new Date(todoObj.dueDate).getTime() - today.getTime()) / one_day);
    if (!(dueIn < 0)) {
        todoDOM.remove();
    }
}

const showOverdue = (projectData) => {
    createTitle('Overdue');
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

    let today = new Date();
    today.setHours(0,0,0,0);
    var one_day = 1000*60*60*24;

    for (const project in projectData.projectList) {
        // project has the project names
        for (const todo of projectData.projectList[project].todoList) {
            let dueIn = Math.floor((new Date(todo.dueDate).getTime() - today.getTime()) / one_day);
            if (dueIn < 0) {
                let newToDo = createToDoDOM(todo, projectData);
                todoContainer.appendChild(newToDo);
            }
        }
    }
    if (todoContainer.innerHTML == "") {
        todoContainer.innerHTML = '<div class="done">No tasks are overdue!</div>';
    }
}

export {
    showOverdue,
    checkOverdue
}