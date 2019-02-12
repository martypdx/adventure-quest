import loadData from '../load-data.js';
import loadProfile from '../load-profile.js';
import scoreHp from './score-hp.js';

const user = loadData('user');
loadProfile(user);

const storyDisplay = document.getElementById('storyDisplay');

let story = 'After your adventures, ' + user.name + ' the ' + user.race + ', ';

const hpResult = scoreHp(user.hp);
story += hpResult;

if(user.hp > 0) {
    
}


storyDisplay.textContent = story;