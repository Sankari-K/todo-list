import { endOfISOWeek } from 'date-fns';
import { createTitle } from '../dom-manipulation/inboxPage';
import { exitToDoInput } from '../dom-manipulation/createToDo';
import { exitEditForm } from '../dom-manipulation/editToDo';
import { Projects } from '../modules/projects';
import { createToDoDOM } from '../dom-manipulation/createToDo';

const showDueThisWeek = () => {
    createTitle('Due this week');
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
    let end = new Date(endOfISOWeek(today, {weekStartsOn: 1}));
    end.setHours(0,0,0,0);

    for (const project in Projects.projectList) {
        // project has the project names
        for (const todo of Projects.projectList[project].todos) {
            let due = new Date(todo.dueDate);
            due.setHours(0,0,0,0);
            if (due <= end && due >= today) {
                let newToDo = createToDoDOM(todo);
                todoContainer.appendChild(newToDo);
            }
        }
    }
}

export {
    showDueThisWeek
}