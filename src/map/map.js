import quests from '../quests.js';
import loadUser from '../load-user.js';
import loadCompleted from '../load-completed.js';

const user = loadUser();

if(user.hp <= 0) {
    window.location = 'end.html';
}

const completed = loadCompleted();
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