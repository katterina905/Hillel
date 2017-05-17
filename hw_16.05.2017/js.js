
var allClients = [];
var resInf;


var save = document.querySelector('.save');
save.addEventListener("click", validInfo);

function randomId (min, max) {
    var rand = min + Math.random() * (max - min);
    rand = Math.round(rand);
    return rand;
}

function templateApp(arr) {

    arr.forEach(function(item) {
        var newClients = "<tr><td>"+" "+item.lastName+" "+"</td><td>"+" "+item.firstName+" "+"</td><td>"+" "+item.age+" "+"</td><td>"+" "+item.gender+" "+"</td> <td><button class = 'edit' data-id =" + item.id + ">edit</button></td> <td><button class = 'delite' data-id =" + item.id + ">delite</button></td><tr><br>";
        document.querySelector('#content').innerHTML += newClients;

        var delite = document.querySelector('.delite');
        delite.addEventListener("click", event);

        var edit = document.querySelector('.edit');
        edit.addEventListener("click", event);

    })

}

function event() {

    var clientId = this.getAttribute("data-id");
    var res;
    var ind;

    allClients.forEach(
        function (item, i) {
            if(item.id == clientId){
                res = item;
                ind = i;
            }
        }
    );
    resInf = res;
    var className = this.className;
    if(className == 'delite'){
        res.delite(ind);
    }else {

        var editForm = '<div class = "form"><input placeholder = " Last Name " class = "lastNameEdit"> <input placeholder = " First Name " class = "firstNameEdit"> <input placeholder = " Age " class = "ageEdit" type = "number"> <select> <option>man</option> <option>women</option> <select> <input type = "button" value = " Save " id = "saveEdit"></div>'
        document.querySelector('#editForm').innerHTML = editForm;

        var saveEdit = document.querySelector('#saveEdit');
        saveEdit.addEventListener("click", edit);

    }
}


function edit() {
    var lastName = document.querySelector('.lastNameEdit').value;
    var firstName = document.querySelector('.firstNameEdit').value;
    var age = document.querySelector('.ageEdit').value;
    var select = document.querySelector('select');
    var selectOptions = select.options[select.selectedIndex];
    var options = selectOptions.value;

    var editClients = new Constructor(lastName, firstName, age, options);

    resInf.edit(editClients);
}


function validInfo(){

    var lastName = document.querySelector('.lastName').value;
    var firstName = document.querySelector('.firstName').value;
    var age = document.querySelector('.age').value;
    var select = document.querySelector('select');
    var selectOptions = select.options[select.selectedIndex];
    var options = selectOptions.value;

    if (lastName.length >= 30) {
        alert('Error! Last Name is long!')
    }
    if (isFinite(+lastName) == true) {
        alert('Error! Last Name is number!')
    }
    if (firstName.length >= 30) {
        alert('Error! First Name is long!')
    }
    if (isFinite(+firstName) == true) {
        alert('Error! First Name is number!')
    }
    else{
        var newClients = new Constructor(lastName, firstName, age, options);
        allClients.push(newClients);
        console.log(allClients);
        document.querySelector('#content').innerHTML = '';
        templateApp(allClients);

    }
}

function Constructor(lastName, firstName, age, options){

    this.id = randomId(1, 1000000)
    this.lastName = lastName,
    this.firstName = firstName,
    this.age = age,
    this.gender = options;

}

Constructor.prototype.delite = function (ind) {

    var allRes = allClients.splice(0, ind);

    document.querySelector('#content').innerHTML = '';
    allClients = allRes;
    templateApp(allClients);
};

Constructor.prototype.edit = function (obj) {
        console.log(this);

        this.lastName = obj.lastName,
        this.firstName = obj.firstName,
        this.age = obj.age,
        this.gender = obj.gender;

    document.querySelector('#content').innerHTML = '';
    templateApp(allClients);
};

