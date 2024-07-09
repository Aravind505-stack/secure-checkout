document.addEventListener('DOMContentLoaded', () => {
    const countdownTime = 1 * 60 + 50; // 1 minute and 50 seconds in seconds

    function startCountdown(duration, display) {
        let timer = duration, hours, minutes, seconds;
        setInterval(() => {
            hours = parseInt(timer / 3600, 10);
            minutes = parseInt((timer % 3600) / 60, 10);
            seconds = parseInt(timer % 60, 10);

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = hours + ":" + minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration; // Reset the timer
            }
        }, 1000);
        }

    const timerDisplay = document.getElementById('timer');
    startCountdown(countdownTime, timerDisplay);
});
function removeItem(button) {
    button.innerText = 'Done';
}
