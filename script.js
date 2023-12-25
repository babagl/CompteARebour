console.log('hello world');
var targetDate = new Date('jan 1, 2024 00:00:00').getTime();
console.log(targetDate);

function newYear(params) {
    var current = new Date().getTime();
    difference = targetDate - current;

    var second = 1000;
    var minute = second * 60;
    var heure = minute * 60;
    var day = heure * 24;

    var d = Math.floor(difference / (day));
    var h = Math.floor((difference % (day)) / (heure));
    var m = Math.floor((difference % (heure)) / (minute));
    var s = Math.floor((difference % (minute)) / (second));

    document.getElementById('jour').innerText = d;
    document.getElementById('heure').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('seconde').innerText = s;
}


setInterval(function () {
    newYear()
}, 1000)

const injectCursorPosition = ( { x, y } )=>{
    document.documentElement.style.setProperty('--x', Math.round(x));
    document.documentElement.style.setProperty('--y', Math.round(y));
}


document.body.addEventListener('pointermove', injectCursorPosition)