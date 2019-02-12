import saveUser from '../save-user.js';
import saveCompleted from '../save-completed.js';
const userSignin = document.getElementById('user-signin');

userSignin.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(userSignin);

    const user = {
        name: formData.get('name'),
        race: formData.get('race'),
        hp: 75,
        gold: 0
    };

    saveUser(user);
    const completed = {};
    saveCompleted(completed);

    window.location = 'map.html';
});