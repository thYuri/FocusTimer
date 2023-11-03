function initializeSoundButtons() {
    const florestaButton = document.querySelector('.sound1');

    florestaButton.addEventListener('click', () => {
        florestaButton.classList.toggle('active1');
    });

    const chuvaButton = document.querySelector('.sound2');

    chuvaButton.addEventListener('click', () => {
        chuvaButton.classList.toggle('active2');
    });

    const cafeteriaButton = document.querySelector('.sound3');

    cafeteriaButton.addEventListener('click', () => {
        cafeteriaButton.classList.toggle('active3');
    });

    const lareiraButton = document.querySelector('.sound4');

    lareiraButton.addEventListener('click', () => {
        lareiraButton.classList.toggle('active4');
    });
}

export { initializeSoundButtons };


