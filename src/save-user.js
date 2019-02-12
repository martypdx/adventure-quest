
function saveUser(user) {
    const json = JSON.stringify(user);
    window.localStorage.setItem('user', json);
}

export default saveUser;