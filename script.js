const menu = document.getElementById('menu');
const cross = document.getElementById('cross');
const list = document.getElementById('list');
const arrow = document.getElementById('arrow');
const arrowUp = document.getElementById('arrow-2');
const listMain = document.getElementById('list-2');

menu.addEventListener('click', () => {
    cross.style.display = "block";
    list.style.display = "block";
    menu.style.display = "none";
})
cross.addEventListener('click', () => {
    cross.style.display = "none";
    list.style.display = "none";
    menu.style.display = "block";
})
arrow.addEventListener('click', () => {
    arrow.style.display = "none";
    listMain.style.display = "block";
    arrowUp.style.display = "block";
})
arrowUp.addEventListener('click', () => {
    arrowUp.style.display = "none";
    listMain.style.display = "none";
    arrow.style.display = "block";
})
