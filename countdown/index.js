

const reloadButton = document.querySelector("#reload-button");
const dateInputForm = document.querySelector("#dateInputForm");
const inputDate = document.querySelector("#dateInput");
const countDownDisplay = document.querySelector(".countdown");

const countDownParts = document.querySelectorAll("span[id*=countdown]");

const dataToCountDown = [
  { value: 0 },
  { value: 0 },
  { value: 0 },
  { value: 0 },
];

let countDownDate, interval;


const arrangeNumbers = (number) => {
  return String(number).padStart(2, "0");
};


const countdownTimer = () => {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  dataToCountDown[0].value = Math.floor(distance / (1000 * 60 * 60 * 24));
  dataToCountDown[1].value = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  dataToCountDown[2].value = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  dataToCountDown[3].value = Math.floor((distance % (1000 * 60)) / 1000);

  // display values on screen
  countDownParts.forEach((item, index) => {
    item.textContent = arrangeNumbers(dataToCountDown[index].value);
  });

  if (distance < 0) {
    clearInterval(interval);
    countDownDisplay.innerHTML = `<p><span>Terminou!</span></p>`;
  }
};

dateInputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  countDownDate = new Date(inputDate.value).getTime();

  if (!countDownDate) {
    return;
  }

  countDownDisplay.style.display = "flex";
  reloadButton.style.display = "block";

  inputDate.style.display = "none";
  dateInputForm.style.display = "none";

  interval = setInterval(() => {
    countdownTimer();
  }, 1000);

  countdownTimer();
});

reloadButton.addEventListener("click", () => window.location.reload());
