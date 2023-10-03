const menu = document.getElementById('menu');
const cross = document.getElementById('cross');
const list = document.getElementById('list');
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