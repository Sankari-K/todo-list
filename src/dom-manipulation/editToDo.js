import { checkDueThisWeek } from "../filtering/dueThisWeek";
import { checkDueToday } from "../filtering/dueToday";
import { localStorageFunctions } from "../storage";

const exitEditForm = () => {
    // clean up
    let editForm = document.querySelector('#new-todo-edit');
    document.querySelector('#new-todo').after(editForm);
    editForm.style.display = "none";
}

const editToDo = (e, projectData) => {
    // get the todo DOM
    let todoDOM = e.currentTarget.parentNode.parentNode;
    // get the todo object
    let todoEdit = e.currentTarget.nextSibling.correspondingToDo;

    let editForm = document.querySelector('#new-todo-edit');
    todoDOM.after(editForm);

    // filling in the default, old values
    let title = document.querySelector('#new-todo-edit input:first-child');
    title.value = todoEdit.title;
    let desc = title.nextElementSibling;
    desc.value = todoEdit.description;
    let dueDate = desc.nextElementSibling.querySelector('input');
    dueDate.value = todoEdit.dueDate;
    let priority = document.querySelector('#priority-edit');
    priority.value = todoEdit.priority;
    editForm.style.display = "flex";
 
    let cancelButton = document.querySelector('#new-todo-edit .buttons > .red');
    let submitButton = document.querySelector('#new-todo-edit .buttons > .green');
    cancelButton.onclick = exitEditForm;

    submitButton.onclick = function() {
        // check values
        if (title.value == '') {
            window.alert("Task name can't be empty");
            title.value = todoEdit.title;
            return;
        }
        else if (desc.value == '') {
            window.alert("Description can't be empty");
            desc.value = todoEdit.description;
            return;
        }
        else if (dueDate.value == '') {
            window.alert("Due date can't be empty");
            dueDate.value = todoEdit.dueDate;
            return;
        }
        // change values in the data structure
        todoEdit.title = title.value;
        todoEdit.description = desc.value;
        todoEdit.dueDate = dueDate.value;
        todoEdit.priority = priority.value;
        localStorageFunctions.dumpIntoStorage(projectData);
        exitEditForm();

        todoDOM.querySelector('.title > span').textContent = title.value;
        todoDOM.querySelector('.description').textContent = desc.value;

        let today = new Date();
        today.setHours(0,0,0,0);
        var one_day = 1000*60*60*24;
        let dueIn = Math.floor((new Date(todoEdit.dueDate).getTime() - today.getTime()) / one_day);
        let dueDesc; 
        if (dueIn < 0) {
            dueDesc = "Overdue";
        }
        else {
            dueDesc = `Due in ${dueIn} day(s)`;
        }
        todoDOM.querySelector('.due-date').textContent = `${todoEdit.dueDate} - ${dueDesc}`;

        // change priority class
        todoDOM.className = todoDOM.className.replace( /priority-([1-4])/ , `priority-${todoEdit.priority}` );

        // check due dates
        if (new Date(todoEdit.dueDate) < today) {
            todoDOM.classList.add('overdue');
        }
        else {
            todoDOM.classList.remove('overdue');
        }

        let todoContainer = document.querySelector('.todos');
        // if we're on the "due today" page, check if the due date is no longer today
        if (document.querySelector('.content > span').textContent == "Due today ⚠") {
            checkDueToday(todoDOM, todoEdit);
            if (todoContainer.innerHTML == "") {
                todoContainer.innerHTML = '<div class="done">Tasks done for the day! 🎉 </div>';
            }
        }
        // if we're on the "due this week" page, check if the due date is no longer this week
        else if (document.querySelector('.content > span').textContent == "Due this week") {
            checkDueThisWeek(todoDOM, todoEdit);
            if (todoContainer.innerHTML == "") {
                todoContainer.innerHTML = '<div class="done">Tasks done for the week! 🎉 </div>';
            }
        }
    }
}

export {
    editToDo,
    exitEditForm
} 