const createTitle = (name) => {
    let contentContainer = document.querySelector('.content');
    contentContainer.querySelector('span').textContent = name;
}

const showProjectPage = (e) => {
    let projectName = e.target.innerText;
    console.log(projectName);

    // create the title
    createTitle(projectName);

    // show all the to-dos under this project 
}

export {
    showProjectPage
}