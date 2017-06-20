let firstname, lastname, age;

window.onload = function() {
     firstname = document.querySelector('#firstname');
     lastname = document.querySelector('#lastname');
     age = document.querySelector('#age');
}

function clearInput() {
firstname.value = '';
lastname.value = '';
age.value = '';
}

function create () {
    let user ={
        firstname: firstname.value,
        lastname: lastname.value,
        age: age.value
    };
    console.log(user)
    createUser(user, clearInput);
}
