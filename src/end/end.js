import loadData from '../load-data.js';
import loadProfile from '../load-profile.js';
import scoreHp from './score-hp.js';
import scoreGold from './score-Gold.js';
import isDead from '../is-dead.js';

const user = loadData('user');
loadProfile(user);

const storyDisplay = document.getElementById('storyDisplay');

let story = 'After your adventures, ' + user.name + ' the ' + user.race + ', ';

const hpResult = scoreHp(user.hp);
const userIsDead = isDead(user);
const goldResult = scoreGold(user.hp, userIsDead);
story += hpResult;
story += ' and ';
story += goldResult;
story += '.';

storyDisplay.textContent = story;