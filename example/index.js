const clock = document.getElementById('clock');
clock.innerHTML = getCurrentTime();

setInterval(() => {
    clock.innerHTML = getCurrentTime();
}, 1000);

function getCurrentTime() {
    const date = new Date();
    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function pad(num) {
    if (num < 10) return '0' + num;
    return num;
}
