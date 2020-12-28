let newYear = new Date("Jan 1, 2021 00:00:00").getTime();

const countdown = document.getElementById('countdown');

let updateCountdownClock = setInterval(function(){
    let now = new Date().getTime();
    let difference = newYear - now;

    let days = Math.floor(difference / (1000 * 60 * 60 *24))
    let hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdown.innerHTML = days + "Days" + hours + "Hours" + minutes + "Minutes" + seconds + "Seconds till 2021!"

    if (mins = mins < 10){
        "0" + mins
    } if (seconds = seconds < 10){
        "0" + seconds
    } elsif (difference <= 0 )
        return 0
},1000)