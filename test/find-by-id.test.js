import findById from '../src/find-by-id.js';
const test = QUnit.test;

QUnit.module('find by id');

test('finds', function(assert) {
    const items = [
        { id: 'one' },
        { id: 'two' },
        { id: 'three' },
    ];

    const found = findById(items, 'two');
    assert.deepEqual(found, { id: 'two' });
});