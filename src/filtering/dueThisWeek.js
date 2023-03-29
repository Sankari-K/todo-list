import { endOfISOWeek, startOfISOWeek } from 'date-fns';
import { createTitle } from '../dom-manipulation/inboxPage';
import { exitToDoInput, createToDoDOM } from '../dom-manipulation/createToDo';
import { exitEditForm } from '../dom-manipulation/editToDo';

const checkDueThisWeek = () => {
    // remove the todo if its due date isn't this week
    let todoContainer = document.querySelector('.todos').childNodes;
    
    let today = new Date();
    today.setHours(0,0,0,0);
    let end = new Date(endOfISOWeek(today, {weekStartsOn: 1}));
    end.setHours(0,0,0,0);
    let start = new Date(startOfISOWeek(today, {weekStartsOn: 1}));
    start.setHours(0,0,0,0);

    todoContainer.forEach(todo => {
        if (todo.classList.contains('todo')) {
            let todoObj = todo.querySelector('.edits').lastChild.correspondingToDo;
            let due = new Date(todoObj.dueDate);
            due.setHours(0,0,0,0);

            if (!(due <= end && due >= start)) {
                todo.remove();
            }
        }   
    });
}

const showDueThisWeek = (projectData) => {
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
    let start = new Date(startOfISOWeek(today, {weekStartsOn: 1}));
    start.setHours(0,0,0,0);

    for (const project in projectData.projectList) {
        // project has the project names
        for (const todo of projectData.projectList[project].todoList) {
            let due = new Date(todo.dueDate);
            due.setHours(0,0,0,0);
            if (due <= end && due >= start) {
                let newToDo = createToDoDOM(todo, projectData);
                todoContainer.appendChild(newToDo);
            }
        }
    }

    if (todoContainer.innerHTML == "") {
        todoContainer.innerHTML = '<div class="done">Tasks done for the week! 🎉 </div>';
    }
}

export {
    showDueThisWeek,
    checkDueThisWeek
}