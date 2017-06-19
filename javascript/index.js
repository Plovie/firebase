


function loadListUser( users){
    var tbody = document.getElementById('list-user');
    tbody.innerHTML = '';
    var count = 0;
    console.log(users)
    users.forEach(function(user){

            console.log(user);
            var tr= tbody.insertRow(count);
            tr.id = user.id;


            var cell = tr.insertCell(0);
            var cell1 = tr.insertCell(1);
            var cell2 = tr.insertCell(2);
            var cell3 = tr.insertCell(3);


            cell.innerHTML = user.firstname;
            cell1.innerHTML = user.lastname;
            cell2.innerHTML = user.age;


            var edit = document.createElement("BUTTON");
            var editText = document.createTextNode("EDIT");       // Create a text node
            edit.appendChild(editText);

            var remove = document.createElement("BUTTON");
            var editText = document.createTextNode("DELETE");       // Create a text node
            remove.appendChild(editText);

            cell3.append(edit);
            cell3.append(remove);
            var btns = cell3.getElementsByTagName('button');
            console.log(btns);
            btns[0].className = 'hollow button edit';
            btns[1].className = 'hollow button alert delete';

            count ++;

    });
}


function loadListUserFilter(search, users){
    var tbody = document.getElementById('list-user');
    tbody.innerHTML = '';
    var count = 0;
    console.log(users)
    users.forEach(function(user){
        console.log(search.includes(user.firstname));
        if (user.firstname.includes(search)
            || user.lastname.includes(search) ) {
            console.log(user);
            var tr= tbody.insertRow(count);
            tr.id = user.id;


            var cell = tr.insertCell(0);
            var cell1 = tr.insertCell(1);
            var cell2 = tr.insertCell(2);
            var cell3 = tr.insertCell(3);


            cell.innerHTML = user.firstname;
            cell1.innerHTML = user.lastname;
            cell2.innerHTML = user.age;


            var edit = document.createElement("BUTTON");
            var editText = document.createTextNode("EDIT");       // Create a text node
            edit.appendChild(editText);

            var remove = document.createElement("BUTTON");
            var editText = document.createTextNode("DELETE");       // Create a text node
            remove.appendChild(editText);

            cell3.append(edit);
            cell3.append(remove);
            var btns = cell3.getElementsByTagName('button');
            console.log(btns);
            btns[0].className = 'hollow button edit';
            btns[1].className = 'hollow button alert delete';

            count ++;
        }

    });
}

