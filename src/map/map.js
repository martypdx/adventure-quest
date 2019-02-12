import quests from '../quests.js';
import loadData from '../load-data.js';
import loadProfile from '../load-profile.js';

const user = loadData('user');
loadProfile(user);

if(user.hp <= 0) {
    window.location = 'end.html';
}

const completed = loadData('completed');
const nav = document.getElementById('quests');

for(let index = 0; index < quests.length; index++) {
    const quest = quests[index];

    if(completed[quest.id]) {
        continue;
    }

    const link = document.createElement('a');
    link.classList.add('quest');
    link.href = 'quest.html?id=' + quest.id;
    link.textContent = quest.title;

    nav.appendChild(link);
}

if(nav.children.length === 0) {
    window.location = 'end.html';
}