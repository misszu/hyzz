let yesBtn = document.getElementById("yes-btn");
let noBtn = document.getElementById("no-btn");
let valentineImg = document.getElementById("valentine-img");

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
    "Ok your talking to Ivan's ghost",
    "Don’t do this to meee",
    "I’ll be the saddest ghost ever",
    "pleaseee babyy:((",
    ":((((",
    "PRETTY PLEASE",
    "NO :(( ",
    "Don't click this, or your phone will get a virus.",
    "You’re breaking my heart </3",
    "Omaiz naman wag na mag valentines",
    "hyzz sira na ang bohay ng tropa"
];

let noClickCount = 0;
let movedOnce = false; // Track if "No" has moved once

// When "Yes" button is clicked
yesBtn.addEventListener("click", function() {
  document.getElementById("message").innerHTML = "Yayy.. Can't wait to take you out, my babyy✌️❤️";
  // Hide both "Yes" and "No" buttons after clicking "Yes"
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  // Change the GIF when the "Yes" button is clicked
  valentineImg.src = "new-valentine.gif"; // Replace with your new GIF file
});

// When "No" button is clicked
noBtn.addEventListener("click", function() {
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
    noBtn.style.top = `${yesBtnRect.top + yesBtnRect.height + 10}px`; // 10px below

    movedOnce = true; // Prevent further movement
  }

  // Change "No" button text on each click
  if (noClickCount < noTexts.length) {
    noBtn.innerText = noTexts[noClickCount];
    noClickCount++;
  }
});

// Add interaction when hovering over "No" button (optional fun feature)
noBtn.addEventListener("mouseover", function() {
  let x = Math.random() * (window.innerWidth - 100);
  this.style.left = `${x}px`; // Moves the button horizontally on hover
});