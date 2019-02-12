
function loadUser() {
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
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');

    name.textContent = user.name;
    avatar.src = 'assets/avatars/' + user.race + '.png';
    hp.textContent = user.hp;
    gold.textContent = user.gold;

    return user;
}

export default loadUser;