'use strict'
function db(id='') {
    return database.ref('users/' + id);
}

function getUsers(id, cb){

    db(id).on('value',function(snapshot){
        cb(snapshot);
        console.log('coucou')
    })
}

function createUser(data, cb){
    console.log(data);
    db().push(data)
        .then(
            cb()
        )
        .catch((error) => {
        console.log(error)
        })
}

function updateUser(id, data){

    db(id).update(data);
}

function removeUser(id) {
    console.log('delete');
    db(id).remove();
}
