let wins = 0;
let looses = 0;

function updateResult() {
    document.getElementById('wins').textContent = wins;
    document.getElementById('looses').textContent = looses;
}

function resetResult() {
    wins = 0;
    looses = 0;
    updateResult();
}

document.querySelectorAll('.hole').forEach(hole => {
    hole.addEventListener('click', () => {
      if (hole.classList.contains('hole_has-mole')) {
        wins++;
        updateResult();
        if (wins == 10) {
            alert('Вы победили');
            resetResult();
        }
      } else {
        looses++;
        updateResult();
        if (looses == 5) {
            alert('Вы проиграли');
            resetResult();
        }
      }
    });
});


