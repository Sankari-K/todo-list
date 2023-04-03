import './style.css';
import { addProject, refreshProject } from './dom-manipulation/projectControls';
import { createToDoInput } from './dom-manipulation/createToDo';
import { showInbox } from './dom-manipulation/inboxPage';
import { showDueToday } from './filtering/dueToday';
import { showDueThisWeek } from './filtering/dueThisWeek';
import { localStorageFunctions } from './storage';
import { showCompleted } from './filtering/completed';
import { showOverdue } from './filtering/overdue';
import { closeSidenav } from './dom-manipulation/menuControls';

let projectData;
try {
    projectData = localStorageFunctions.fetchFromStorage();
}
catch {
    // data required from localStorage isn’t there
    localStorage.proj = JSON.stringify({});
    projectData = localStorageFunctions.fetchFromStorage();
}
finally {
    localStorageFunctions.dumpIntoStorage(projectData);
}

// localStorage.proj = JSON.stringify({});
// projectData = localStorageFunctions.fetchFromStorage();
// localStorageFunctions.dumpIntoStorage(projectData);

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
    closeSidenav();
    showInbox(projectData);
});

// show tasks due today when clicked on it
sidebar.getElementsByTagName('div')[1].addEventListener('click', function() {
    closeSidenav();
    showDueToday(projectData);
});

// show tasks due this week when clicked on it
sidebar.getElementsByTagName('div')[2].addEventListener('click', function() {
    closeSidenav();
    showDueThisWeek(projectData);
});

// show completed tasks when clicked on it
sidebar.getElementsByTagName('div')[3].addEventListener('click', function() {
    closeSidenav();
    showCompleted(projectData);
}) 

// show overdue tasks 
sidebar.getElementsByTagName('div')[4].addEventListener('click', function() {
    closeSidenav();
    showOverdue(projectData);
})

// add event listener to the dropdown near the projects
sidebar.querySelector(".project-header").addEventListener('click', function() {
    let projectContainer  = sidebar.querySelector("#projects");
    let image = sidebar.querySelector(".project-header > img");
    if (projectContainer.classList.contains("hide")) {
        // show it
        projectContainer.classList.remove("hide");
        image.style.transform = `rotate(${0}deg)`;
    }
    else {
        // hide it
        projectContainer.classList.add("hide");
        image.style.transform = `rotate(${-90}deg)`;
    }
})

// for smaller screens
document.querySelector('img[alt="todolist-logo"]').addEventListener('click', function() {
    // If I click on this, it means I'd like to see the hamburger menu
    // If the sidenav is not visible, do some action
    let displayStyle = window.getComputedStyle(document.querySelector('.side-nav'), 
                        null).getPropertyValue("display");
    if (displayStyle == "none") {
        // show the sidenav, hide the contents
        document.querySelector('.side-nav').style.display = "block";
        document.querySelector('.content').style.display = "none";
    }
})

// add event listeners for swipes

let touchStartX = 0
let touchEndX = 0

function checkDirection() {
    if (touchEndX < touchStartX) {
        // swiped left
        // show the main content, only if it isn't visible aready
        let displayStyle = window.getComputedStyle(document.querySelector('.content'), 
                        null).getPropertyValue("display");
        if (displayStyle == "none") {
            closeSidenav();
        }
    }
    else if (touchEndX > touchStartX) {
        // swiped right
        // show the sidenav, only if it isn't visible already
        let displayStyle = window.getComputedStyle(document.querySelector('.side-nav'), 
                        null).getPropertyValue("display");
        if (displayStyle == "none") {
            document.querySelector('.side-nav').style.display = "block";
            document.querySelector('.content').style.display = "none";
        }
    }
}

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
})

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    checkDirection();
})