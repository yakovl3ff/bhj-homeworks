const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');

let clickCount = 0;
let lastClickTime = null;

cookie.addEventListener('click', () => {
    clickCount++;
    counter.textContent = clickCount;

    const currentClickTime = new Date();

    if (lastClickTime !== null) {
        const timeDiff = (currentClickTime - lastClickTime) / 1000;
        const clickSpeed = (1 / timeDiff).toFixed(2);
        speed.textContent = clickSpeed;
    }

    lastClickTime = currentClickTime;
});