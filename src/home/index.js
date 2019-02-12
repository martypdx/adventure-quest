const userSignin = document.getElementById('user-signin');

userSignin.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(userSignin);

    const user = {
        name: formData.get('name'),
        race: formData.get('race')
    };

    const json = JSON.stringify(user);

    window.localStorage.setItem('user', json);

    window.location = 'map.html';
});