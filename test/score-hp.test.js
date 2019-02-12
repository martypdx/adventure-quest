const test = QUnit.test;

function scoreHp(hp) {
    if(hp <= 0) {
        return 'you are dead';
    }
    if(hp < 35) {
        return 'you retire in frail health';
    }
    return 'you retire and live a long life in good health';
}

test('dead', function(assert) {
    const score = scoreHp(0);
    assert.equal(score, 'you are dead');
});

test('frail', function(assert) {
    const score = scoreHp(34);
    assert.equal(score, 'you retire in frail health');
});

test('good health', function(assert) {
    const score = scoreHp(35);
    assert.equal(score, 'you retire and live a long life in good health');
});