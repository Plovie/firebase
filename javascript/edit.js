function showEdit(row){
    let editFirstname = document.createElement("INPUT");
    editFirstname.type = "text";
    editFirstname.name = "editFirstname-"+row.id;
    editFirstname.value = row.childNodes[0].innerHTML;
    row.childNodes[0].innerHTML = "";
    row.childNodes[0].append(editFirstname);

    let editLastname = document.createElement("INPUT");
    editLastname.type = "text";
    editLastname.name = "editLastname-"+row.id;
    editLastname.value = row.childNodes[1].innerHTML;
    row.childNodes[1].innerHTML = "";
    row.childNodes[1].append(editLastname);

    let editAge = document.createElement("INPUT");
    editAge.type = "text";
    editAge.name = "editAge-"+row.id;
    editAge.value = row.childNodes[2].innerHTML;
    row.childNodes[2].innerHTML = "";
    row.childNodes[2].append(editAge);

    let update = document.createElement("BUTTON");
    let updateText = document.createTextNode("UPDATE");       // Create a text node
    update.appendChild(updateText);
    let cancel = document.createElement("BUTTON");
    let cancelText = document.createTextNode("CANCEL");       // Create a text node
    cancel.appendChild(cancelText);
    row.childNodes[3].innerHTML = "";

    row.childNodes[3].append(update);
    row.childNodes[3].append(cancel);
    row.childNodes[3].childNodes[0].className = "hollow button update";
    row.childNodes[3].childNodes[1].className = "hollow button alert cancel";
}

function actionEdit(row){
    row.childNodes[3].childNodes[0].addEventListener('click',function(event){
        console.log(event.target.parentElement.parentElement)
        let parent = event.target.parentElement.parentElement;
        let firstname = parent.childNodes[0].childNodes[0];
        let lastname = parent.childNodes[1].childNodes[0];
        let age = parent.childNodes[2].childNodes[0];
        console.log(firstname);

        let user = new User(firstname.value, lastname.value, age.value);
        user.updateUser(parent.id);
    });

    row.childNodes[3].childNodes[1].addEventListener('click',function(event){
        console.log(event.target.parentElement.parentElement)
        let parent = event.target.parentElement.parentElement;
        parent.childNodes[0].innerHTML = parent.childNodes[0].childNodes[0].value;
        parent.childNodes[1].innerHTML = parent.childNodes[1].childNodes[0].value;
        parent.childNodes[2].innerHTML = parent.childNodes[2].childNodes[0].value;

        parent.childNodes[3].innerHTML = '';
        let edit = document.createElement("BUTTON");
        let editText = document.createTextNode("EDIT");       // Create a text node
        edit.appendChild(editText);

        let remove = document.createElement("BUTTON");
        let deleteText = document.createTextNode("DELETE");       // Create a text node
        remove.appendChild(deleteText);

        parent.childNodes[3].append(edit);
        parent.childNodes[3].append(remove);
        let btns =  parent.childNodes[3].getElementsByTagName('button');

        btns[0].className = 'hollow button edit';
        btns[1].className = 'hollow button alert delete';

        btns[0].addEventListener('click', function(event){
                let row = event.target.parentElement.parentElement;
                console.log(row.childNodes[3].getElementsByClassName("update").length);
                if(row.childNodes[3].getElementsByClassName("update").length > 0){
                    return false;
                }
                showEdit(row);
                actionEdit(row);

            });

        btns[1].addEventListener('click', function(event){
            let parent = event.target.parentElement.parentElement;
            console.log(parent);
            let user = new User();
            user.delete(parent.id);
        });
    });



}