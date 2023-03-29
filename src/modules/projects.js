const Project = (inputName, inputTodoList) => {
    // each project has a name and a list of todos
    // todos = [];
    let todoList = inputTodoList;
    let name = inputName;
    
    
    const addToProject = (todo) => {
        todoList.push(todo)
    };

    const removeFromProject = todo => {
        var index = todoList.indexOf(todo);
        var removedTodo = todoList[index];

        if (index != -1) {
            todoList.splice(index, 1);
        }
        return removedTodo;
    };

    return { name, todoList, addToProject, removeFromProject };
};

let Projects = (newProjectList) => {
    let projectList = newProjectList;
    if (!('Inbox' in projectList)) {
        projectList['Inbox'] = Project('Inbox', []);
    }
    
    const createNewProject = (name) => {
        projectList[name] = Project(name, []);
    };

    const deleteProject = (name) => {
        delete projectList[name];
    };

    return {
        projectList,
        createNewProject,
        deleteProject
    };
};

export {
    Projects,
    Project
};