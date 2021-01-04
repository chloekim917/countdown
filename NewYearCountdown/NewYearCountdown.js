let newYear = new Date("Jan 1, 2021 00:00:00").getTime();

const countdown = document.getElementById('countdown');

let updateCountdownClock = setInterval(function(){
    let now = new Date().getTime();
    let difference = newYear - now;

    let days = Math.floor(difference / (1000 * 60 * 60 *24))
    let hrs = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((difference % (1000 * 60)) / 1000);

    countdown.innerHTML = days + " Days " + hrs + " Hours " + mins + " Minutes " + secs + " Seconds till 2021!"

    if (difference < 0 ){
        clearInterval(updateCountdownClock);
        countdown.innerHTML = "Happy New Year!"
    }

},1000)