import './style.css';
import { addProject, refreshProject } from './dom-manipulation/projectControls';
import { createToDoInput } from './dom-manipulation/createToDo';
import { showInbox } from './dom-manipulation/inboxPage';
import { showDueToday } from './filtering/dueToday';
import { showDueThisWeek } from './filtering/dueThisWeek';
import { localStorageFunctions } from './storage';


// localStorage.proj = JSON.stringify({});

let projectData = localStorageFunctions.fetchFromStorage();
localStorageFunctions.dumpIntoStorage(projectData);

// We start by showing the user the inbox page
showInbox(projectData);
// make sure all projects are visible
refreshProject(projectData);

// when a new project is added
document.querySelector('#add-project').addEventListener('click', function() {
    addProject(projectData);
});

// to open up the create todo modal - inside the inbox
document.querySelector('#create-todos').addEventListener('click', function() {
    createToDoInput(projectData);
});

let sidebar = document.querySelector('.side-nav');

// show inbox when clicked on it
sidebar.getElementsByTagName('div')[0].addEventListener('click', function() {
    showInbox(projectData);
});

// show tasks due today when clicked on it
sidebar.getElementsByTagName('div')[1].addEventListener('click', function() {
    showDueToday(projectData);
});

// show tasks due this week when clicked on it
sidebar.getElementsByTagName('div')[2].addEventListener('click', function() {
    showDueThisWeek(projectData);
});
