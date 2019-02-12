
function loadProfile(user) {
    if(!user) {
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
}

export default loadProfile;