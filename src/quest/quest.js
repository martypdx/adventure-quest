
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