'use strict';

let firstname, lastname, age, id;

window.onload = function() {
    firstname = document.querySelector('#firstname');
    lastname = document.querySelector('#lastname');
    age = document.querySelector('#age');
    id = getIdByUrl();
    getUsers(id ,fillInput)
};


function fillInput(snapshot) {
    let user = snapshot.val();
    firstname.value = user.firstname;
    lastname.value = user.lastname;
    age.value = user.age;
};

function update(){
let user = {
    firstname: firstname.value,
    lastname: lastname.value,
    age: age.value
}
    updateUser(id, user);
}
