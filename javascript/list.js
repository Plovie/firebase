
let tab, buttons ;
window.onload = function () {
    tab = document.querySelector('#list-user');
    getUsers('', adddUsersTab, removeUser)
    buttons = document.querySelector(".delete");
    console.log(buttons);

}