const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterTitleEl = document.querySelector('.counter__title');
const counterBackgroundEl = document.querySelector('.counter');

const counterValueEl = document.querySelector('.counter__value');

const onDecreaseButtonClick = () => {
    let counterValue = +counterValueEl.textContent - 1;

    if (counterValue < 0) {
        counterValue = 0;
    }

    if (counterValue < 10) {
        counterTitleEl.textContent = 'Fancy Counter';
        counterBackgroundEl.classList.remove('counter--limit');
    }

    counterValueEl.textContent = counterValue;
    // unfocus decrease button (blur)
    decreaseButtonEl.blur();
};

const onIncreaseButtonClick = () => {
    let counterValue = +counterValueEl.textContent + 1;

    if (counterValue > 10) {
        counterValue = 10;
        counterBackgroundEl.classList.add('counter--limit');
        counterTitleEl.innerHTML = 'For > 10 buy <b>Pro</b>';
    }

    counterValueEl.textContent = counterValue;
    // unfocus increase button (blur)
    increaseButtonEl.blur();
};

increaseButtonEl.addEventListener('click', onIncreaseButtonClick);

decreaseButtonEl.addEventListener('click', onDecreaseButtonClick);

resetButtonEl.addEventListener('click', () => {
    counterValueEl.textContent = 0;
    counterBackgroundEl.classList.remove('counter--limit');
    counterTitleEl.textContent = 'Fancy Counter';
    // unfocus reset button (blur)
    resetButtonEl.blur();
});

document.addEventListener('keydown', onIncreaseButtonClick);
