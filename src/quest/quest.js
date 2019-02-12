import loadUser from '../load-user.js';
import quests from '../quests.js';
import findById from '../find-by-id/js';

loadUser();

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const search = findById(quests, questId);

if(!search) {
    window.location = 'map.html';
}


