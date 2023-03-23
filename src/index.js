import './style.css';
import { addProject } from './dom-manipulation/projectControls';
import { createToDoInput } from './dom-manipulation/createToDo';

document.querySelector('#add-project').addEventListener('click', addProject);
document.querySelector('#create-todos').addEventListener('click', createToDoInput);