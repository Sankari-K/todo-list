import { Projects } from "../modules/projects";
import { exitEditForm } from "./editToDo";

const deleteToDo = (e) => {
    let projectName = document.querySelector('.content').querySelector('span').textContent;
    let toDelete = e.currentTarget.correspondingToDo;

    // if the edit option was opened for this, close that
    let todoDOM = e.currentTarget.parentNode.parentNode;
    if (todoDOM.nextSibling.id == "new-todo-edit") {
        exitEditForm();
    }

    let DOMContainer = document.querySelector('.todos').children;
    let index = 0;
    for (const todo of DOMContainer) {
        let deleteElement = todo.querySelector('.edits').lastChild.correspondingToDo;
        if (deleteElement == toDelete) {
            // remove it from the DOM
            todo.remove();
            // now, delete it from the data structure
            delete Projects.projectList[projectName].todos[index]
            Projects.projectList[projectName].todos.splice(index, 1);
        };
        index += 1;
    }
}

export {
    deleteToDo
}