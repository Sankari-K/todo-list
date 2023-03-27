import { createTitle } from "../dom-manipulation/inboxPage";
import { exitToDoInput } from "../dom-manipulation/createToDo";
import { exitEditForm } from "../dom-manipulation/editToDo";
import { Projects } from "../modules/projects";
import { format } from 'date-fns'
import { createToDoDOM } from "../dom-manipulation/createToDo";

const checkDueToday = () => {
    // remove the todo if its due date isn't today
    let todoContainer = document.querySelector('.todos').childNodes;
    
    let today = format(new Date(),'yyyy-MM-dd');
    todoContainer.forEach(todo => {
        if (todo.classList.contains('todo')) {
            let todoObj = todo.querySelector('.edits').lastChild.correspondingToDo;
            if (todoObj.dueDate != today) {
                todo.remove();
            }
        }   
    });
}

const showDueToday = () => {
    createTitle('Due today ⚠');
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

    // show all projects due today
    let today = format(new Date(),'yyyy-MM-dd');

    for (const project in Projects.projectList) {
        // project has the project names
        for (const todo of Projects.projectList[project].todos) {
            if (todo.dueDate == today) {
                let newToDo = createToDoDOM(todo);
                todoContainer.appendChild(newToDo);
            }
        }
    }
}

export {
    showDueToday,
    checkDueToday
}