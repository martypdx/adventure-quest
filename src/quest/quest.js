import loadUser from '../load-user.js';
import saveUser from '../save-user.js';
import loadCompleted from '../load-completed.js';
import saveCompleted from '../save-completed.js';
import quests from '../quests.js';
import findById from '../find-by-id.js';

const user = loadUser();

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = findById(quests, questId);

if(!quest) {
    window.location = 'map.html';
}

const title = document.getElementById('title');
const image = document.getElementById('image');
const audio = document.getElementById('audio');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

title.textContent = quest.title;
image.src = 'assets/quests/' + quest.image;
// audio.src = 'assets/quests/' + quest.audio;
description.textContent = quest.description;

for(let index = 0; index < quest.choices.length; index++) {
    const choice = quest.choices[index];

    const label = document.createElement('label');
    label.classList.add('choice');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.required = true;
    radio.value = choice.id;
    label.appendChild(radio);

    const description = document.createElement('span');
    description.textContent = choice.description;
    label.appendChild(description);

    choices.appendChild(label);
}

choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    const choice = findById(quest.choices, choiceId);

    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;

    user.hp += choice.hp;
    user.gold += choice.gold;
    saveUser(user);
    loadUser();

    const completed = loadCompleted();
    completed[quest.id] = true;
    saveCompleted(completed);
});
