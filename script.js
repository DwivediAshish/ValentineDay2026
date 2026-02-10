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
    "Tell me yes?",
    "Pretty please?",
    "I can bring chocolates.",
    "I can bring flowers.",
  ];

  maybeClicks += 1;
  if (maybeClicks >= 3) {
    yesBtn.focus();
    setMessage("The answer is in the big pink button.");
    return;
  }

  const nudge = nudges[(maybeClicks - 1) % nudges.length];
  setMessage(nudge);
});
