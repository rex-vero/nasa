const menu = document.getElementById('menu');
const cross = document.getElementById('cross');
const list = document.getElementById('list');
const arrow = document.getElementById('arrow');
const arrowUp = document.getElementById('arrow-2');
const listMain = document.getElementById('list-2');
const nasa = document.getElementById('nasa');
const plane = document.getElementById('plane');
const astroid = document.getElementById('astroid');
const rex = document.getElementById('rex');
const main = document.getElementById('main');

menu.addEventListener('click', () => {
    cross.style.display = "block";
    list.style.display = "block";
    menu.style.display = "none";
    main.style.display = "none";
})
cross.addEventListener('click', () => {
    cross.style.display = "none";
    list.style.display = "none";
    main.style.display = "block";
    menu.style.display = "block";
})
arrow.addEventListener('click', () => {
    arrow.style.display = "none";
    main.style.display = "none";
    listMain.style.display = "block";
    arrowUp.style.display = "block";
})
arrowUp.addEventListener('click', () => {
    arrowUp.style.display = "none";
    main.style.display = "block";
    listMain.style.display = "none";
    arrow.style.display = "block";
})

const change1 = () => {
    nasa.style.display = "block"
    plane.style.display = "none";
    astroid.style.display = "none";
    rex.style.display = "none";

}
const change2 = () => {
    nasa.style.display = "none"
    plane.style.display = "block";
    astroid.style.display = "none";
    rex.style.display = "none";
}
const change3 = () => {
    nasa.style.display = "none"
    plane.style.display = "none";
    astroid.style.display = "block";
    rex.style.display = "none";
}
const change4 = () => {
    nasa.style.display = "none"
    plane.style.display = "none";
    astroid.style.display = "none";
    rex.style.display = "block";
}
