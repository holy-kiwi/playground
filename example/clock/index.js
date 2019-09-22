const date = document.getElementById('clock-date');
const time = document.getElementById('clock-time');
date.innerHTML = getCurrentDate();
time.innerHTML = getCurrentTime();

setInterval(() => {
    date.innerHTML = getCurrentDate();
    time.innerHTML = getCurrentTime();
}, 1000);

function getCurrentTime() {
    const date = new Date();
    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function getCurrentDate() {
    const date = new Date();
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function pad(num) {
    if (num < 10) return '0' + num;
    return num;
}
