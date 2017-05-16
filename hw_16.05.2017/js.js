
var allClients = [];

var save = document.querySelector('.save');
save.addEventListener("click", validInfo);

function randomId (min, max) {
    var rand = min + Math.random() * (max - min);
    rand = Math.round(rand);
    return rand;
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
        tabl({liElements: 'allClients'});
    }
}

function Constructor(lastName, firstName, age, options){

    this.id = randomId(1, 1000000);
    this.lastName = lastName,
    this.firstName = firstName,
    this.age = age,
    this.gender = options;

}

Constructor.prototype.edit = function( el, newText ) {
    this.el = newText;
};

Constructor.prototype.delite = function( id ) {
    delete allClients[id];
};

