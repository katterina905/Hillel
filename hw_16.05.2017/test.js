QUnit.test( "creatingObject", function( assert ) {
    var result = new Client(clients1);
    assert.ok(result, 'Passed!')
});

QUnit.test( "getFirstName", function( assert ) {
    var result = newClient.getFirstName();
    assert.deepEqual(result, 'FirstName1', 'Passed!')
});

QUnit.test( "getFirstName", function( assert ) {
    var result = newClient.updateFirstName('Nik');
    assert.deepEqual(result, 'Nik', 'Passed!')
});

QUnit.test( "getLastName", function( assert ) {
    var result = newClient.getLastName();
    assert.deepEqual(result, 'LastName1', 'Passed!')
});

QUnit.test( "updateGetLastName", function( assert ) {
    var result = newClient.updateGetLastName('Doo');
    assert.deepEqual(result, 'Doo', 'Passed!')
});

QUnit.test( "updateGetLastName", function( assert ) {
    var result = newClient.updateGetLastName('Doo');
    assert.deepEqual(result, 'Doo', 'Passed!')
});

QUnit.test( "getFullName1", function( assert ) {
    var result = newClient.getFullName();
    assert.deepEqual(result, 'FirstName1 LastName1', 'Passed!')
});

QUnit.test( "getFullName2", function( assert ) {
    var result = newClient.getFullName();
    assert.deepEqual(result, 'Nik Doo', 'Passed!')
});

QUnit.test( "updateFullName", function( assert ) {
    var result = newClient.updateFullName('Kat', 'Hotir');
    assert.deepEqual(result, 'Kat Hotir', 'Passed!')
});

QUnit.test( "getAddress", function( assert ) {
    var result = newClient.getAddress();
    assert.deepEqual(result, 'address1', 'Passed!')
});

QUnit.test( "updateAddress", function( assert ) {
    var result = newClient.updateAddress('address2');
    assert.deepEqual(result, 'address2', 'Passed!')
});

QUnit.test( "getPhone", function( assert ) {
    var result = newClient.getPhone();
    assert.deepEqual(result, 'phone1', 'Passed!')
});

QUnit.test( "updatePhone", function( assert ) {
    var result = newClient.updatePhone('newPhone');
    assert.deepEqual(result, 'newPhone', 'Passed!')
});

QUnit.test( "updateAll", function( assert ) {
    var result = newClient.updateAll(clients2);
    assert.deepEqual(result, clients2, 'Passed!')
});




