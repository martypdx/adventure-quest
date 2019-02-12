
function saveData(key, data) {
    const json = JSON.stringify(data);
    window.localStorage.setItem(key, json);
}

export default saveData;