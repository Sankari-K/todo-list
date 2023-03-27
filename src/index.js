import './style.css';
import { addProject } from './dom-manipulation/projectControls';
import { createToDoInput } from './dom-manipulation/createToDo';
import { showInbox } from './dom-manipulation/inboxPage';
import { showDueToday } from './filtering/dueToday';

// We start by showing the user the inbox page
showInbox();

// when a new project is added
document.querySelector('#add-project').addEventListener('click', addProject);
// to open up the create todo modal
document.querySelector('#create-todos').addEventListener('click', createToDoInput);

let sidebar = document.querySelector('.side-nav');

// show inbox when clicked on it
sidebar.getElementsByTagName('div')[0].addEventListener('click', function() {
    showInbox()
});
// show tasks due today when clicked on it
sidebar.getElementsByTagName('div')[1].addEventListener('click', function() {
    showDueToday();
});
// show tasks due this week when clicked on it
sidebar.getElementsByTagName('div')[2].addEventListener('click', function() {
    console.log("this week!!!");
});
