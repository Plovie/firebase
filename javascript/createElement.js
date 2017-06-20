function addButton(name, classUses,path,elemToInsert){
    let button = document.createElement('a');
    let buttonText = document.createTextNode(name);
    button.appendChild(buttonText);
    button.href = path;
    button.className = classUses;
    elemToInsert.appendChild(button);
}

function addDeleteUserButton(name, classUser, id, elemToInsert){
    let button = document.createElement('a');
    let buttonText = document.createTextNode(name);
    button.appendChild(buttonText);
    button.addEventListener('click', function(event){
        event.preventDefault();
        removeUser(id);
    });
    button.className = classUser;
    elemToInsert.appendChild(button);
}

function addUserRow(snapshot){
        let user = snapshot.val();
        let id = snapshot.key;
        let tabIntoInsert = document.querySelector('#list-user');
        tabIntoInsert.innerHTML = '';
        let rowToInsert = tabIntoInsert.insertRow();
        let cell = rowToInsert.insertCell(0);
        let cell1 = rowToInsert.insertCell(1);
        let cell2 = rowToInsert.insertCell(2);
        let cell3 = rowToInsert.insertCell(3);

        cell.innerHTML = user.firstname;
        cell1.innerHTML = user.lastname;
        cell2.innerHTML = user.age;
        addButton('Show','hollow button','show.html?id='+id, cell3);
        addButton('Edit','hollow button success','update.html?id='+id, cell3);
        addDeleteUserButton('Delete', 'hollow button warning delete',id,  cell3)
}

function adddUsersTab(users){
    users.forEach(function (snapshotChild) {
        addUserRow(snapshotChild)
    });
}

function addOneUser(snapshot){
    addUserRow(snapshot);
}