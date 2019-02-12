const test = QUnit.test;

const DEAD = 'you are dead';
const FRAIL = 'you retire in frail health';
const HEALTH = 'you retire and live a long life in good health';

function scoreHp(hp) {
    if(hp <= 0) {
        return DEAD;
    }
    if(hp < 35) {
        return FRAIL;
    }
    return HEALTH;
}

test('dead', function(assert) {
    const score = scoreHp(0);
    assert.equal(score, DEAD);
});

test('frail', function(assert) {
    const score = scoreHp(34);
    assert.equal(score, FRAIL);
});

test('good health', function(assert) {
    const score = scoreHp(35);
    assert.equal(score, HEALTH);
});