import scoreGold from '../src/end/score-gold.js';
import goldOptions from '../src/end/gold-options.js';
const test = QUnit.test;


QUnit.module('score gold');

test('alive poor', function(assert) {
    const score = scoreGold(0, false);
    assert.equal(score, goldOptions.poorAlive);
});

test('dead poor', function(assert) {
    const score = scoreGold(0, true);
    assert.equal(score, goldOptions.poorDead);
});

test('alive modest', function(assert) {
    const score = scoreGold(50, false);
    assert.equal(score, goldOptions.modestAlive);
});

test('dead modest', function(assert) {
    const score = scoreGold(50, true);
    assert.equal(score, goldOptions.modestDead);
});

test('alive rich', function(assert) {
    const score = scoreGold(100, false);
    assert.equal(score, goldOptions.richAlive);
});

test('dead rich', function(assert) {
    const score = scoreGold(100, true);
    assert.equal(score, goldOptions.richDead);
});
