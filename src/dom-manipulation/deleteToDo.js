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
}

export {
    deleteToDo
}