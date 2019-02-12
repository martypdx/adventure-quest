import quests from '../quests.js';

const json = window.localStorage.getItem('user');
let user = null;
if(json) {
    user = JSON.parse(json);
}
else {
    window.location = './';
}

const name = document.getElementById('name');
const avatar = document.getElementById('avatar');

name.textContent = user.name;
avatar.src = 'assets/avatars/' + user.race + '.png';

const nav = document.getElementById('quests');

for(let index = 0; index < quests.length; index++) {
    const quest = quests[index];

    const link = document.createElement('a');
    link.classList.add('quest');
    link.href = 'quest.html?id=' + quest.id;
    link.textContent = quest.title;

    nav.appendChild(link);
}