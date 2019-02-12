import quests from '../quests.js';
import loadData from '../load-data.js';
import loadProfile from '../load-profile.js';
import isDead from '../is-dead.js';

const user = loadData('user');
loadProfile(user);

if(isDead(user)) {
    window.location = 'end.html';
}

const completed = loadData('completed');
const nav = document.getElementById('quests');

let hasQuests = false;

for(let index = 0; index < quests.length; index++) {
    const quest = quests[index];

    if(completed[quest.id]) {
        continue;
    }

    hasQuests = true;

    const link = document.createElement('a');
    link.classList.add('quest');
    link.href = 'quest.html?id=' + quest.id;
    link.textContent = quest.title;

    nav.appendChild(link);
}

if(hasQuests) {
    window.location = 'end.html';
}