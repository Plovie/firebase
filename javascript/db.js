'use strict'


function db(id='') {
    return database.ref('users/' + id);
}

function getUsers(id, cb){
    db(id).on('value',function(snapshot){
        cb(snapshot);
    })
}

function createUser(data, cb){
    console.log(data);
    db().push({
        firstname: 'coucou',
        lastname: 'coucoul',
        age: '25'
    })
        .then(
            cb()
        )
        .catch((error) => {
        console.log(error)
        })
}

