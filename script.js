let yesBtn = document.getElementById("yes-btn");
let noBtn = document.getElementById("no-btn");
let valentineImg = document.getElementById("valentine-img");
let message = document.getElementById("message");

let noClickCount = 0;
let firstClick = false; // Track if "No" has been clicked once

let noTexts = [
    "Are you sure?",
    "What if I asked really nicely?",
    "Pretty please:(",
    "With chocolate mochi on top?",
    "What about a matcha frostie",
    "PLEASE POOKIEE",
    "But:(",
    "I am going to die:<",
    "Yep im dead",
    "Ok you're talking to Ivan's ghost",
    "Don’t do this to meee",
    "I’ll be the saddest ghost ever",
    "pleaseee babyy:((",
    ":((((",
    "PRETTY PLEASE",
    "NO :((",
    "Don't click this, or your phone will get a virus.",
    "You’re breaking my heart </3",
    "Omaiz naman wag na mag valentines",
    "hyzz sira na ang bohay ng tropa"
];

// When "Yes" button is clicked
yesBtn.addEventListener("click", function() {
  message.innerHTML = "Yayy.. Can't wait to take you out, my babyy✌️❤️";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  // Change GIF when clicking "Yes"
  valentineImg.src = "new-valentine.gif";
});

// When "No" button is clicked
noBtn.addEventListener("click", function() {
  if (!firstClick) {
    // Move "No" button higher & Change GIF on first click
    noBtn.classList.add("moved");
    valentineImg.src = "valentiness.gif"; // Replace with the new GIF
    firstClick = true;
  } else {
    // Make "Yes" button bigger
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 5) + "px";
  }

  // Change "No" button text
  if (noClickCount < noTexts.length) {
    noBtn.innerText = noTexts[noClickCount];
    noClickCount++;
  }
});