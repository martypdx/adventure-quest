import isDead from '../src/is-dead.js';
const test = QUnit.test;

QUnit.module('is user dead');

test('is dead', function(assert) {
    const user = { hp: 0 };
    const userIsDead = isDead(user);
    assert.equal(userIsDead, true);
});

test('is alive', function(assert) {
    const user = { hp: 10 };
    const userIsDead = isDead(user);
    assert.equal(userIsDead, false);
});