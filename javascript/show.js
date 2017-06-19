
let tab ;
let url_string = window.location.href;
let url = new URL(url_string);
let id = url.searchParams.get("id");

window.onload = function () {
    tab = document.querySelector('#list-user');
    getUsers(id,addOneUser)
}