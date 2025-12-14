const clock = document.querySelector("#clock");
const cal = document.querySelector("#date");

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    const month = String(date.getMonth());
    const day = String(date.getDate());
    cal.innerText = `${month}/${day}`;
    clock.innerText = `${hour}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);