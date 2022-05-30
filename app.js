const pause = document.getElementById('pause');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const timerDisplay = document.getElementById('timerDisplay');
let millisecond = 0, second = 0, minute = 0, hour = 0;
let loop;

start.addEventListener('click', () => {
    clearInterval(loop)
    loop = setInterval(counter, 10)
})

pause.addEventListener('click', () => {
    clearInterval(loop);
})

reset.addEventListener('click', () => {
    clearInterval(loop);
    millisecond = 0, second = 0, minute = 0, hour = 0;
    flag_cont.innerHTML = "0 : 0 : 0 : 0";
    timerDisplay.innerHTML = `${hour} : ${minute} : ${second} : ${millisecond}`;
})

flag.addEventListener('click', () => {
    flag_cont.innerHTML = `${hour} : ${minute} : ${second} : ${millisecond}`;
})

function counter() {
    millisecond += 10;
    if (millisecond == 1000) {
        millisecond = 0;
        second++;

        if (second == 60) {
            second = 0;
            minute++;

            if (minute == 60) {
                minute = 0;
                hour++;
            }
        }
    }

    timerDisplay.innerHTML = `${hour} : ${minute} : ${second} : ${millisecond}`;
}