import hpOptions from './hp-options.js';

function scoreHp(hp) {
    if(hp <= 0) {
        return hpOptions.dead;
    }
    if(hp < 35) {
        return hpOptions.frail;
    }
    return hpOptions.health;
}

export default scoreHp;