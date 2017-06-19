
let tab, id;

window.onload = function () {
    tab = document.querySelector('#list-user');
    id = getIdByUrl();
    getUsers(id,addOneUser)
}