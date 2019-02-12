import loadData from '../load-data.js';
import loadProfile from '../load-profile.js';

const user = loadData('user');
loadProfile(user);

const storyDisplay = document.getElementById('storyDisplay');

let story = 'Well, ' + user.name + ' the ' + user.race + ', ';

if(user.hp <= 0) {
    story += 'you are dead.';
}


storyDisplay.textContent = story;