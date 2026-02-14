const yesBtn = document.getElementById("yesBtn");
const maybeBtn = document.getElementById("maybeBtn");
const response = document.getElementById("response");

const messages = [
  "Yay! You just made my day.",
  "Best answer ever. Happy Valentine's!",
  "Cue the happy dance!",
];

let maybeClicks = 0;

function setMessage(text) {
  response.textContent = text;
}

yesBtn.addEventListener("click", () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  setMessage(message);
  maybeBtn.disabled = true;
  maybeBtn.textContent = "Ok, ok!";
});

maybeBtn.addEventListener("click", () => {
  const nudges = [
    "Seriously? So you wanna ditch your kadhi chawal?",
    "And for what? Some Bengali boys?",
    "I hope you are ready for some drama",
    "Ab itne bhi bhaav mat kha... Haan bol de ab.",
  ];

  maybeClicks += 1;
  if (maybeClicks >= 4) {
    yesBtn.focus();
    setMessage("Okay Anuja, I’m waiting…");
    return;
  }

  const nudge = nudges[(maybeClicks - 1) % nudges.length];
  setMessage(nudge);
  maybeBtn.classList.remove("wiggle");
  void maybeBtn.offsetWidth;
  maybeBtn.classList.add("wiggle");
});
