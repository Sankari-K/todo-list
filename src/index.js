import './style.css';
import { addProject } from './dom-manipulation/projectControls';
import { createToDoInput } from './dom-manipulation/createToDo';
import { showInbox } from './dom-manipulation/inboxPage';

// We start by showing the user the inbox page
showInbox();

document.querySelector('#add-project').addEventListener('click', addProject);
document.querySelector('#create-todos').addEventListener('click', createToDoInput);
document.querySelector('.side-nav').firstElementChild.addEventListener('click', function() {
    showInbox()
});