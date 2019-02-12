import saveData from '../save-data.js';
const userSignin = document.getElementById('user-signin');

userSignin.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(userSignin);

    const user = {
        name: formData.get('name'),
        race: formData.get('race'),
        hp: 55,
        gold: 0
    };
    saveData('user', user);
    
    const completed = {};
    saveData('completed', completed);

    window.location = 'map.html';
});