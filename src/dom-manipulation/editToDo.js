import { showProjectPage } from "./projectPage";

const editToDo = (e) => {
    let projectName = document.querySelector('.content').querySelector('span').textContent;
    // get the todo DOM
    let todoDOM = e.currentTarget.parentNode.parentNode;
    // get the todo object
    let todoEdit = e.currentTarget.nextSibling.correspondingToDo;

    let editForm = document.querySelector('#new-todo-edit');
    todoDOM.after(editForm);

    let title = document.querySelector('#new-todo-edit input:first-child');
    title.value = todoEdit.title;
    let desc = title.nextElementSibling;
    desc.value = todoEdit.description;
    let dueDate = desc.nextElementSibling.querySelector('input');
    dueDate.value = todoEdit.dueDate;
    let priority = document.querySelector('#priority-edit');
    priority.value = todoEdit.priority;
    editForm.style.display = "flex";

    const exitEditForm = () => {
        // clean up
        document.querySelector('#new-todo').after(editForm);
        editForm.style.display = "none";
    }

    let cancelButton = document.querySelector('#new-todo-edit .buttons > .red');
    let submitButton = document.querySelector('#new-todo-edit .buttons > .green');
    cancelButton.onclick = exitEditForm;

    submitButton.onclick = function() {
        todoEdit.title = title.value;
        todoEdit.description = desc.value;
        todoEdit.dueDate = dueDate.value;
        todoEdit.priority = priority.value;
        exitEditForm();
        showProjectPage(projectName, false);
    }
}

export {
    editToDo
} 