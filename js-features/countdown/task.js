const timerElement = document.getElementById('timer');
let timeLeft = 3;

function formatTime(seconds) {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

timerElement.textContent = formatTime(timeLeft);

const countdown = setInterval(() => {
    timeLeft--;

    if (timeLeft <= 0) {
        clearInterval(countdown);
        alert('Вы победили в конкурсе');
        return;
    }

    timerElement.textContent = formatTime(timeLeft);
}, 1000);
