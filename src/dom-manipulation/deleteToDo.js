import { Projects } from "../modules/projects";
import { exitEditForm } from "./editToDo";

const deleteToDo = (e) => {
    let toDelete = e.currentTarget.correspondingToDo;
    let projectName = toDelete.project;

    // if the edit option was opened for this, close that
    let todoDOM = e.currentTarget.parentNode.parentNode;
    if (todoDOM.nextSibling != null && todoDOM.nextSibling.id == "new-todo-edit") {
        exitEditForm();
    }

    let DOMContainer = document.querySelector('.todos').children;
    for (const todo of DOMContainer) {
        let deleteElement = todo.querySelector('.edits').lastChild.correspondingToDo;
        if (deleteElement == toDelete && toDelete.project == deleteElement.project) {
            // remove it from the DOM
            todo.remove();
            // now, delete it from the data structure
            let index = Projects.projectList[projectName].todos.indexOf(toDelete);
            delete Projects.projectList[projectName].todos[index]
            Projects.projectList[projectName].todos.splice(index, 1);
        };
    }

    let todoContainer = document.querySelector('.todos');
    if (document.querySelector('.content > span').textContent == "Due today ⚠" &&
    todoContainer.innerHTML == "") {
        todoContainer.innerHTML = '<div class="done">Tasks done for the day! 🎉 </div>';
    }
    // if we're on the "due this week" page, check if the due date is no longer this week
    else if (document.querySelector('.content > span').textContent == "Due this week" &&
    todoContainer.innerHTML == "") {
        todoContainer.innerHTML = '<div class="done">Tasks done for the week! 🎉 </div>';
    }
}

export {
    deleteToDo
}