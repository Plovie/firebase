function addButton(name, classUses,path,elemToInsert){
    let button = document.createElement('a');
    let buttonText = document.createTextNode(name);       // Create a text node
    button.appendChild(buttonText);
    button.href = path;
    button.className = classUses;
    elemToInsert.appendChild(button);
}

function adddUsersTab(users){
    users.forEach(function (snapshotChild) {
        let user = snapshotChild.val();
        let id = snapshotChild.key;
        let tabIntoInsert = document.querySelector('#list-user');
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
    });

}