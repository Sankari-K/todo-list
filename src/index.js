import './style.css';
import { addProject } from './dom-manipulation/add-project';
import { Projects } from './modules/projects';

document.querySelector('#add-project').addEventListener('click', addProject);


document.querySelector('#add-project').addEventListener('click', () => {
    console.log("woot!");
    console.log(Projects)
});

