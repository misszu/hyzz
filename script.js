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

document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("message").innerHTML = "Yayy let's get married!";
});

document.getElementById("no-btn").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - 100);
    this.style.left = `${x}px`;
});

document.getElementById("no-btn").addEventListener("click", function() {
    // Make "Yes" button bigger
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 5) + "px";

    // Move "No" button above "Yes" button only once
    if (!movedOnce) {
        let yesBtnRect = yesBtn.getBoundingClientRect();
        let noBtnRect = noBtn.getBoundingClientRect();

        // Set "No" button just above the "Yes" button
        noBtn.style.position = "absolute";
        noBtn.style.left = `${yesBtnRect.left}px`;
        noBtn.style.top = `${yesBtnRect.top - noBtnRect.height - 10}px`; // 10px above

        movedOnce = true; // Prevent further movement
    }

    // Change "No" button text
    if (noClickCount < noTexts.length) {
        noBtn.innerText = noTexts[noClickCount];
        noClickCount++;
    }
});