import { toDo } from "../modules/todo";
import { deleteToDo } from "../dom-manipulation/deleteToDo";
import { editToDo } from "./editToDo";
import { localStorageFunctions } from "../storage";
import delSrc from "../assets/content/delete.png";
import editSrc from "../assets/content/edit.png";

const exitToDoInput = () => {
    let addToDo = document.querySelector('#create-todos');
    let createToDo = document.querySelector('#new-todo');

    let title = document.querySelector('#new-todo input:first-child');
    let desc = title.nextElementSibling;
    let dueDate = desc.nextElementSibling.querySelector('input');
    let priority = document.querySelector('#priority');

    title.value = "";
    desc.value = "";
    dueDate.value = "";
    priority.selectedIndex = 0;

    addToDo.style.display = "flex";
    createToDo.style.display = "none";
}

const createToDoDOM = (todo, projectData) => {
    let todoElement = document.createElement('div');
    todoElement.classList.add('todo', `priority-${todo.priority}`);

    let today = new Date();
    today.setHours(0,0,0,0);
    if (new Date(todo.dueDate) < today) {
        todoElement.classList.add('overdue');
    }

    let header = document.createElement('div');
    let title = document.createElement('div'); 
    title.setAttribute('class', 'title');
    // title.textContent = todo.title;

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    if (todo.done == true) {
        checkbox.checked = true;
    }
    title.appendChild(checkbox);

    checkbox.addEventListener('change', () => {
        if (checkbox.checked == true) {
            todo.done = true;
        }
        else {
            todo.done = false;
        }
        localStorageFunctions.dumpIntoStorage(projectData);
    })

    let titleName = document.createElement('span');
    titleName.textContent = todo.title;
    title.appendChild(titleName);

    let project = document.createElement('span');
    project.setAttribute('class', 'project');
    project.textContent = todo.project;
    header.append(
        title,
        project
    )

    let desc = document.createElement('span');
    desc.setAttribute('class', 'description');
    desc.textContent = todo.description;

    let edits = document.createElement('div');
    edits.setAttribute('class', 'edits');

    let due = document.createElement('span');
    due.setAttribute('class', 'due-date');
    due.textContent = todo.dueDate;
    let editImg = document.createElement('img');
    editImg.src = editSrc;
    editImg.alt = "edit-icon";
    let deleteImg = document.createElement('img');
    deleteImg.src = delSrc;
    deleteImg.alt = "delete-icon";

    // add event listener to delete todos
    deleteImg.addEventListener('click', function(e) {
        deleteToDo(e, projectData);
    });
    deleteImg.correspondingToDo = todo;
    editImg.addEventListener('click', function(e) {
        editToDo(e, projectData);
    });

    edits.append(
        due,
        editImg,
        deleteImg
    );

    todoElement.append(
        header,
        desc,
        edits
    );
    return todoElement;
}

const createToDoInput = (projectData) => {
    // DOM stuff first - hide the create button,
    // show the input form
    let addToDo = document.querySelector('#create-todos');
    let createToDo = document.querySelector('#new-todo');

    addToDo.style.display = "none";
    createToDo.style.display = "flex";

    let title = document.querySelector('#new-todo input:first-child');
    let desc = title.nextElementSibling;
    let dueDate = desc.nextElementSibling.querySelector('input');
    let priority = document.querySelector('#priority');
    
    // now, add event listeners for the submit and cancel button
    document.querySelector('#new-todo .red').onclick = exitToDoInput;

    function getToDoDetails() {
        // validate form
        if (title.value == '') {
            window.alert("Task name can't be empty");
        }
        else if (desc.value == '') {
            window.alert("Description can't be empty");
        }
        else if (dueDate.value == '') {
            window.alert("Due date can't be empty");
        }
        else {
            // Todo can be created now
            let projectName = document.querySelector('.content > span').textContent;
            let todo = toDo.createToDo(
                title.value, 
                desc.value, 
                dueDate.value, 
                priority.value, 
                projectName,
                false);
            
            // add the todo to the project data structure
            projectData.projectList[projectName].addToProject(todo);
            localStorageFunctions.dumpIntoStorage(projectData);

            // create a todo DOM structure and append to existing elements
            let toDoContainer = document.querySelector('.todos');
            toDoContainer.appendChild(createToDoDOM(todo, projectData));
            
            exitToDoInput();
        }

    }
    // for the submit button 
    document.querySelector('#new-todo .green').onclick = getToDoDetails;
}

export {
    createToDoInput,
    exitToDoInput,
    createToDoDOM
}