import scoreHp from '../src/end/score-hp.js';
import hpOptions from '../src/end/hp-options.js';

const test = QUnit.test;

test('dead', function(assert) {
    const score = scoreHp(0);
    assert.equal(score, hpOptions.dead);
});

test('frail', function(assert) {
    const score = scoreHp(34);
    assert.equal(score, hpOptions.frail);
});

test('good health', function(assert) {
    const score = scoreHp(35);
    assert.equal(score, hpOptions.health);
});