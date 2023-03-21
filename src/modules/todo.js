const createToDo = (title, description, dueDate, priority, project) => {
    let title = title;
    let description = description;
    let dueDate = dueDate;
    let priority = priority;
    let project = project;

    // setters 
    const changeTitle = newTitle => {
        title = newTitle;
    };

    const changeDescription = newDescription => {
        description = newDescription;
    };

    const changeDueDate = newDueDate => {
        dueDate = newDueDate;
    };

    const changePriority = newPriority => {
        priority = newPriority;
    };

    return {
        title,
        description,
        dueDate,
        priority,
        project,
        changeTitle,
        changeDescription,
        changeDueDate,
        changePriority
    };
}

export {
    createToDo
};