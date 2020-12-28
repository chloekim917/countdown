let startMin = 14;
let time = startMin * 60;

const countdown = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown(){
    let mins = Math.floor(time / 60);
    let seconds = time % 60;

    mins = mins < 10 ? '0' + mins : mins;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdown.innerHTML = `${mins} : ${seconds}`;
    time--;
}