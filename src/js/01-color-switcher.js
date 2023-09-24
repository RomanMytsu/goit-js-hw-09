const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};
let changeColor;
refs.btnStop.disabled = true;
refs.btnStart.addEventListener('click', onBtnStartColors);
refs.btnStop.addEventListener('click', onBtnStopColors);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onBtnStartColors() {
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;

  changeColor = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onBtnStopColors() {
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
  clearInterval(changeColor);
}
