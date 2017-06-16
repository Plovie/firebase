'use strict'

var userIdCount = 0;
class User{

    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }


    create(){
        console.log(userIdCount)
        userIdCount ++;
        firebase.database().ref('users/' + userIdCount).set({
        id: userIdCount,
        firstname: this.firstname,
        lastname: this.lastname,
        age : this.age
        // firstname: 'nico',
        // lastname: 'plo',
        // age : 25
         });
    }

    updateUser(userId){
        database.ref('users/' + userId).update({
            id: userId,
            firstname: this.firstname,
            lastname: this.lastname,
            age : this.age
        });

    }

     delete(userId) {
        console.log(userId);
         database.ref('users/' + userId).remove(function(error) {
             console.log(error ? "Uh oh!" : "Success!");
         });
     }


}

//

// function writeUserData(userId, name, email, imageUrl) {
//     database.ref('users/' + userId).set({
//         username: name,
//         email: email,
//         profile_picture : imageUrl
//     });
// }
//
// function updateName(userId,name) {
//     database.ref('users/' + userId).update({
//         username: name,
//     });
// }
//
// function deleteById(userId) {
//     database.ref('users/' + userId).remove({
//     });
//}


//updateName(12,'coucou')
//deleteById(12);
//writeUserData(12,'lolol','lolo@coucou.com','llk');