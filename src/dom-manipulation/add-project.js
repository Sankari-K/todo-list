import { Projects } from "../modules/projects";


// this is called when someone clicks on the "Add Project" button
const addProject = () => {
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

        let newProjectName = content.value;
        // this is where we have to add a new project
        let projectContainer = document.querySelector('#projects');

        let element = document.createElement('div');
        let image = document.createElement('img');
        image.src = "../src/assets/side-nav/project.png";
        image.alt = "project icon";

        let name = document.createElement('span');
        name.textContent = newProjectName;
        element.append(
            image,
            name
        )
        projectContainer.appendChild(element)
        content.value = "";
        exitControls();

        Projects.createNewProject(newProjectName);
    })    
};

export {
    addProject
}