import { showInbox } from "./inboxPage";
import { showProjectPage } from "./projectPage";
import { localStorageFunctions } from "../storage";
import projSrc from "../assets/side-nav/project.png";
import cancelSrc from "../assets/side-nav/cancel.png";

const deleteProject = (e, projectData) => {
    e.stopPropagation();
    projectData.deleteProject(e.target.id);
    localStorageFunctions.dumpIntoStorage(projectData);
    refreshProject(projectData);

    let project = document.querySelector('.content > span').textContent;
    // If we were on the project that just got deleted, go to inbox
    if (project == e.target.id) {
        showInbox();
    }
}

const refreshProject = (projectData) => {
    document.querySelector('#projects').innerHTML = "";
    for (let project in projectData.projectList) {
        if (project == "Inbox") {
            continue;
        }
        // project is the project name

        // create a project DOM for this now
        let newProjectName = project;
        // this is where we have to add a new project
        let projectContainer = document.querySelector('#projects');

        let element = document.createElement('div');

        let image = document.createElement('img');
        image.src = projSrc;
        image.alt = "project icon";

        let cancel = document.createElement('img');
        cancel.src = cancelSrc;
        cancel.alt = "delete project";
        cancel.setAttribute('class', 'cancel');
        cancel.setAttribute('id', newProjectName);
        cancel.addEventListener('click', function(e) {
            deleteProject(e, projectData);
        });

        let name = document.createElement('span');
        name.textContent = newProjectName;
        element.append(
            image,
            name,
            cancel
        )

        // add an event listener to this "element"
        element.addEventListener('click', (e) => showProjectPage(e, true, projectData));
        projectContainer.appendChild(element)
    }
}

// this is called when someone clicks on the "Add Project" button
const addProject = (projectData) => {
    let addProjectElement = document.querySelector('#add-project');
    let inputElement = document.querySelector('#new-project');

    const showControls = () => {
        addProjectElement.style.display = "none";
        inputElement.style.display = "flex";
    }

    const exitControls = () => {
        let content = document.querySelector('#new-project > input');
        content.value = "";

        addProjectElement.style.display = "flex";
        inputElement.style.display = "none";
    }

    showControls();
    let submitButton = document.querySelector('#new-project > .green');
    let cancelButton = document.querySelector('#new-project > .red');

    // if user cancels midway
    cancelButton.addEventListener('click', exitControls);

    // user actually submits
    submitButton.addEventListener('click', () => {
        let content = document.querySelector('#new-project > input');
        if (content.value == "") {
            exitControls();
            return;
        }
        else if (content.value in projectData.projectList) {
            window.alert("Project already exists");
            exitControls();
            return;
        }

        let newProjectName = content.value;
        projectData.createNewProject(newProjectName);
        localStorageFunctions.dumpIntoStorage(projectData);
        refreshProject(projectData);
        // content.value = "";
        exitControls();
    })    
};

export {
    addProject,
    deleteProject,
    refreshProject
}