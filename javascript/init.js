/**
 * Created by nicolasplovie on 16/06/2017.
 */

document.getElementById('create-user').addEventListener('click', function(event){
    createUser();
});



 firebase.database().ref('/users' ).on('value',function(snapshot) {

        var usersJSON = snapshot.val();
        console.log(usersJSON);

        if(!usersJSON){
            userIdCount = -1;
            return false;
        }else{
            userIdCount = Object.keys(usersJSON)[Object.keys(usersJSON).length-1];
        }
        console.log(userIdCount);
        var users = [];
         Object.keys(usersJSON).forEach(function(id){
             users.push(usersJSON[id])
         });
            console.log(document.getElementsByName('search')[0].value);
            if(document.getElementsByName('search')[0].value && document.getElementsByName('search')[0].value.length){
                loadListUserFilter(document.getElementsByName('search')[0].value, users);
            }else{
                loadListUser(users);
            }



    var btn = document.getElementsByClassName('edit');
        [].forEach.call(btn, function(elem){
    elem.addEventListener('click', function(event){
        let row = event.target.parentElement.parentElement;
        console.log(row.childNodes[3].getElementsByClassName("update").length);
        if(row.childNodes[3].getElementsByClassName("update").length > 0){
            return false;
        }
        showEdit(row);
        actionEdit(row);

         });
    });

        var btndelete = document.getElementsByClassName('delete');
        [].forEach.call(btndelete, function(elem){
            elem.addEventListener('click', function(event){
                let parent = event.target.parentElement.parentElement;
                let user = new User();
                user.delete(parent.id);
            });
        });

     document.getElementsByName('search')[0].addEventListener('change', function(event){
         var search = event.target.value;
         console.log(search);

         if(search){
             loadListUserFilter(document.getElementsByName('search')[0].value, users);
         }else{
             loadListUser(users);
         }

         var btn = document.getElementsByClassName('edit');
         [].forEach.call(btn, function(elem){
             elem.addEventListener('click', function(event){
                 let row = event.target.parentElement.parentElement;
                 console.log(row.childNodes[3].getElementsByClassName("update").length);
                 if(row.childNodes[3].getElementsByClassName("update").length > 0){
                     return false;
                 }
                 showEdit(row);
                 actionEdit(row);

             });
         });

         var btndelete = document.getElementsByClassName('delete');
         [].forEach.call(btndelete, function(elem){
             elem.addEventListener('click', function(event){
                 let parent = event.target.parentElement.parentElement;
                 let user = new User();
                 user.delete(parent.id);
             });
         });
       // console.log(row);
        // let firstname = document.getElementsByName('createFirstname');
        // let lastname = document.getElementsByName('createLastname');
        // let age = document.getElementsByName('createAge');

        // var user = new User(firstname[0].value, lastname[0].value, age[0].value)
        // console.log(user);
        // user.create();
     });
});

