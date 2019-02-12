import goldOptions from './gold-options.js';

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

export default scoreGold;