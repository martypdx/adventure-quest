// import scoreHp from '../src/end/score-hp.js';
// import hpOptions from '../src/end/hp-options.js';
const test = QUnit.test;

const goldOptions = {
    poorAlive: 'you live as a poor beggar',
    poorDead: 'you leave nothing for your family',
    modestAlive: 'you live in a modest farming the earth',
    modestDead: 'you leave enough to buy your family a turkey dinner at the pub',
    richAlive: 'you and your whole family live in small castle in luxury',
    richDead: 'your family builds a monument in your honor'
};

function scoreGold(gold, isDead) {
    let lifeStyle = '';
    if(gold === 0) {
        lifeStyle = 'poor';   
    }
    else if(gold <= 50) {
        lifeStyle = 'modest';   
    }
    else {
        lifeStyle = 'rich';
    }

    let status = 'Alive';
    if(isDead) {
        status = 'Dead';
    }

    return goldOptions[lifeStyle + status];

}

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
