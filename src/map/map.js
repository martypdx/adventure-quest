import quests from '../quests.js';
import loadUser from '../load-user.js';

loadUser();

const nav = document.getElementById('quests');

for(let index = 0; index < quests.length; index++) {
    const quest = quests[index];

    const link = document.createElement('a');
    link.classList.add('quest');
    link.href = 'quest.html?id=' + quest.id;
    link.textContent = quest.title;

    nav.appendChild(link);
}