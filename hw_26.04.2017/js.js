var clients = [
    {
        id: 0,
        firstName: 'FirstName1',
        lastName: 'LastName1',
        address: 'address1',
        phone: 'phone1'
    },
    {
        id: 1,
        firstName: 'FirstName2',
        lastName: 'LastName2',
        address: 'address2',
        phone: 'phone2'
    },
    {
        id: 2,
        firstName: 'FirstName3',
        lastName: 'LastName3',
        address: 'address3',
        phone: 'phone3'
    }
];

var cards = [
    {
        id: 0,
        clientId: 0,
        number: '0000',
        data: 1493034361601
    },
    {
        id: 1,
        clientId: 0,
        number: '0001',
        data: 1493034301601
    },
    {
        id: 2,
        clientId: 0,
        number: '0002',
        data: 1493034001601
    },
    {
        id: 3,
        clientId: 1,
        number: '1001',
        data: 1493034101601
    }
];



function DataAccessor(obj) {
    this.id = obj.id;
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    this.address = obj.address;
    this.phone = obj.phone;
}

DataAccessor.prototype.get = function (el) {
    return this[el];
};

DataAccessor.prototype.set = function (el, newEl) {
    this[el] = newEl;
};

function Card(obj) {
    this.id = obj.id;
    this.clientId = obj.clientId;
    this.number = obj.number;
    this.data = obj.data;
}

function Client(obj) {
    this.id = obj.id;
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    this.address = obj.address;
    this.phone = obj.phone;
}

Client.prototype.getFirstName = function () {
    return this.firstName;
};

Client.prototype.updateFirstName = function (newFirstName) {
    this.firstName = newFirstName;

    return this.firstName;
};

Client.prototype.getLastName = function () {
    return this.lastName;
};

Client.prototype.updateGetLastName = function (newLastName) {
    this.lastName = newLastName;

    return this.lastName;
};

Client.prototype.getFullName = function () {
    return this.firstName +' '+this.lastName;
};

Client.prototype.updateFullName = function (newFirstName, newLastName) {
    this.firstName = newFirstName;
    this.lastName = newLastName;

    return this.firstName +' '+this.lastName;
};

Client.prototype.getAddress = function () {
    return this.address;
};

Client.prototype.updateAddress = function (newAddress) {
    this.address = newAddress;

    return this.address;
};

Client.prototype.getPhone = function () {
    return this.phone;
};

Client.prototype.updatePhone = function (newPhone) {
    this.phone = newPhone;

    return this.phone;
};

Client.prototype.newDate = function (newId, newFirstName, newLastName, newAddress, newPhone) {
    this.id = newId;
    this.firstName = newFirstName;
    this.lastName = newLastName;
    this.address = newAddress;
    this.phone = newPhone;

    return this;
};

// работа с массивом данных

function destroy ( idClient ) {
    clients.forEach(
        function (item) {
            if(item.id == idClient){
                clients.splice(item, 1)
            }
        }
    );
    return clients;
}

function getCards(arr, id) {
    var allCardSomeClient = [];
    arr.forEach(
        function(item){
            if(item.clientId == id){
                allCardSomeClient.push(item);
            }
        }
    );
    return allCardSomeClient;
}

function addCart(infoCart) {
    var newCart = new Card(infoCart);
    cards.push(newCart);
    return cards;
}

function fetch(arr) {
    var allClient = [];
    arr.forEach(
        function (item) {
            var newClient = new Client(item);
            allClient.push(newClient);
        }
    );
    return allClient;
}

function addClient(infoClient) {
    var newClient = new Client(infoClient);
    clients.push(newClient);

    return clients;
}

Client.prototype = Object.create(DataAccessor.prototype);
Client.prototype.constructor = Client;



