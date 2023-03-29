import { Projects, Project } from "./modules/projects";
import { toDo } from "./modules/todo";

const localStorageFunctions = (() => {
    const fetchFromStorage = () => {
        let projects = JSON.parse(localStorage.proj);

        let tempProjects = {};
        for (let project in projects.projectList) {
            let tempToDos = [];
            for (let todo of projects.projectList[project].todoList) {
                tempToDos.push(toDo.createToDo(todo.title, todo.description,
                    todo.dueDate, todo.priority, todo.project, todo.done));
            }
            tempProjects[project] = Project(project, tempToDos);
        }
        
        return Projects(tempProjects);
    } 

    const dumpIntoStorage = (data) => {
        // storing
        localStorage.proj = JSON.stringify({});
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