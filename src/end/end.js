import loadUser from '../load-user.js';

const user = loadUser();
const storyDisplay = document.getElementById('storyDisplay');

let story = 'Well, ' + user.name + ' the ' + user.race + ', ';

if(user.hp <= 0) {
    story += 'you are dead.';
}



storyDisplay.textContent = story;