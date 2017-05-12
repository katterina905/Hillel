QUnit.test( "map", function( assert ) {
    var result = map([2,4,8], multiplication);
    assert.deepEqual(result, [4,8,16], 'Passed!')
});

QUnit.test( "every-false", function( assert ) {
    var result = every([1,2,3,4,5]);
    assert.ok(result, 'Passed!')
});

QUnit.test( "every-true", function( assert ) {
    var result = every([1,-2,3,-4,5]);
    assert.ok(!result, 'Passed!')
});

QUnit.test( "some-true", function( assert ) {
    var result = some([-1,-2,-3,-4,5],quest);
    assert.ok(result, 'Passed!')
});

QUnit.test( "some-allFalse", function( assert ) {
    var result = some([-1,-2,-3,-4,-5],quest);
    assert.ok(!result, 'Passed!')
});

QUnit.test( "filter", function( assert ) {
    var result = filter([-2,-4,8,13,89], filterArr);
    assert.deepEqual(result, [8,13,89], 'Passed!')
});

QUnit.test( "reduce", function( assert ) {
    var result = reduce([1,2,10,5,5,2,5,5], accum, 2);
    assert.deepEqual(result, 32, 'Passed!')
});

QUnit.test( "reduce", function( assert ) {
    var result = reduce([4,2,8], accum, 1);
    assert.deepEqual(result, 10, 'Passed!')
});

QUnit.test( "getComputed-true", function( assert ) {
    var result = getComputed(sameObj, 'first.sameProp.test');
    assert.ok(result, 'Passed!')
});

QUnit.test( "getComputed-undefined", function( assert ) {
    var result = getComputed({}, 'first.sameProp.test');
    assert.deepEqual(result, 'undefined', 'Passed!')
});

QUnit.test( "setComputed", function( assert ) {
    var result = setComputed(sameObj, 'test', 4);
    assert.deepEqual(result, 4, 'Passed!')
});

QUnit.test( "calculator-multiply", function( assert ) {
    var result = seven(multiply(five()));
    assert.deepEqual(result, 35, 'Passed!')
});

QUnit.test( "calculator-plus", function( assert ) {
    var result = four(plus(nine()));
    assert.deepEqual(result, 13, 'Passed!')
});

QUnit.test( "calculator-minus", function( assert ) {
    var result = eight(minus(three()));
    assert.deepEqual(result, 5, 'Passed!')
});

QUnit.test( "calculator-divide", function( assert ) {
    var result = six(divide(two()));
    assert.deepEqual(result, 3, 'Passed!')
});