import findById from '../src/find-by-id.js';
const test = QUnit.test;

test('find by id', function(assert) {
    const items = [
        { id: 'one' },
        { id: 'two' },
        { id: 'three' },
    ];

    const found = findById(items, 'two');
    assert.deepEqual(found, { id: 'two' });
});