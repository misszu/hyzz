let yesBtn = document.getElementById("yes-btn");
let noBtn = document.getElementById("no-btn");

let noTexts = [
    "Are you sure?",
    "What if I asked really nicely?",
    "Pretty please:(",
    "With chocolate rice cake on top",
    "What about a matcha frostie",
    "PLEASE POOKIEE",
    "But:(",
    "I am going to die:<",
    "Yep, I'm dead",
    "Ok, you're talking to Ivan's ghost",
    "pleaseee babyy:((",
    ":((((",
    "PRETTY PLEASE",
    "NO :((",
    "hyzz sira na ang bohay ng tropa"
];

let noClickCount = 0;
let movedOnce = false; // Track if "No" has moved once

// When "Yes" button is clicked
document.getElementById("yes-btn").addEventListener("click", function() {
  document.getElementById("message").innerHTML = "Yayy.. Can't wait to take you out, my babyy✌️❤️";
  // Hide both "Yes" and "No" buttons after clicking "Yes"
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

// When "No" button is clicked
document.getElementById("no-btn").addEventListener("click", function() {
  // Make "Yes" button bigger
  let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (currentSize + 5) + "px";

  // Move "No" button below "Yes" button only once
  if (!movedOnce) {
    let yesBtnRect = yesBtn.getBoundingClientRect();
    let noBtnRect = noBtn.getBoundingClientRect();

    // Set "No" button just below the "Yes" button
    noBtn.style.position = "absolute";
    noBtn.style.left = `${yesBtnRect.left}px`;
    noBtn.style.top = `${yesBtnRect.top + yesBtnRect.height + 10}px`; // 10px below the "Yes" button

    movedOnce = true; // Prevent further movement
  }

  // Change "No" button text on each click
  if (noClickCount < noTexts.length) {
    noBtn.innerText = noTexts[noClickCount];
    noClickCount++;
  }
});

// Add interaction when hovering over "No" button (optional fun feature)
document.getElementById("no-btn").addEventListener("mouseover", function() {
  let x = Math.random() * (window.innerWidth - 100);
  this.style.left = `${x}px`; // Moves the button horizontally on hover
});