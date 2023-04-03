const closeSidenav = () => {
    document.querySelector('.side-nav').style.display = "none";
    document.querySelector('.content').style.display = "block";
}

export {
    closeSidenav
}