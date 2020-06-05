function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
    document.querySelector('#messages div:first-child').classList.add('bold');
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}