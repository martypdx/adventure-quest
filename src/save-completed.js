
function saveCompleted(completed) {
    const json = JSON.stringify(completed);
    window.localStorage.setItem('completed', json);
}

export default saveCompleted;