
function loadCompleted() {
    const json = window.localStorage.getItem('completed');
    let completed = null;
    if(json) {
        completed = JSON.parse(json);
    }
    
    return completed;
}

export default loadCompleted;