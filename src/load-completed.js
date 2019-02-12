
function loadCompleted() {
    const json = window.localStorage.getItem('completed');
    let completed = null;
    if(json) {
        completed = JSON.parse(json);
    }
    else {
        completed = {};
    }

    return completed;
}

export default loadCompleted;