import { Projects } from "./modules/projects";
import { toDo } from "./modules/todo";
import { createProject } from "./modules/projects";

const localStorageFunctions = (() => {
    const fetchFromStorage = () => {
        // sometime later
        let projects = JSON.parse(localStorage.proj);

        let tempProjects = {};
        for (let project in projects.projectList) {
            let tempToDos = [];
            for (let todo in projects.projectList[project].todos) {
                tempToDos.push(toDo.createToDo(todo.title, todo.description,
                    todo.dueDate, todo.priority, todo.project, todo.done));
            }
            tempProjects[project] = createProject(project, tempToDos);
            
        }

        return Projects(tempProjects); 
    } 

    const dumpIntoStorage = (data) => {
        // storing
        localStorage.proj = JSON.stringify(data);
    }

    return {
        fetchFromStorage,
        dumpIntoStorage
    }
})();

export {
    localStorageFunctions
}