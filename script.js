let yesBtn = document.getElementById("yes-btn");
let noBtn = document.getElementById("no-btn");
let valentineImg = document.getElementById("valentine-img");
let message = document.getElementById("message");

let gifClickCount = 0; // Tracks GIF changes
let textClickCount = 0; // Tracks text changes

let firstClick = false; // Track if "No" has been clicked once

let noTexts = [
    "Are you sure?",
    "What if I asked really nicely?",
    "Pookie please:(",
    "With chocolate mochi on top?",
    "What about a plushiee?",
    "PLEASE POOKIEE",
    "But:(",
    "Ivan will die:<",
    "Yepp he's dead now",
    "Ok you're talking to Ivan's ghost",
    "Don’t do this to meee",
    "I’ll be the saddest ghost ever",
    "please pookiee:((",
    ":((((",
    "NO. how rude:/",
    "You're going to break my heart like this?",
    "Don't click this, or your phone will get a virus.",
    "I can't believe you'd make me beg",
    "hyzz",
    "You ruined Ivan's life",
    "Just click the fvcking Yes",
    "Pretty please, just click 'Yes'! You won’t regret it",
    ":(("
];

let gifList = [
    "gif1.gif",
    "gif2.gif",
    "gif3.gif",
    "gif4.gif",
    "gif5.gif",
    "gif5.gif",
    "gif5.gif",
    "gif8.gif",
    "gif9.gif",
    "gif10.gif",
    "gif10.gif",
    "gif10.gif",
    "gif10.gif",
    "gif14.gif",
    "gif15.gif",
    "gif16.gif",
    "gif17.gif",
    "gif17.gif",
    "gif19.gif",
];

// When "Yes" button is clicked
yesBtn.addEventListener("click", function() {
  message.innerHTML = "Yayy.. Can't wait to take you out honey✌️✌️";
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
    // Change GIF every click
    if (gifClickCount < gifList.length) {
      valentineImg.src = gifList[gifClickCount];
      gifClickCount++;
    } else {
      valentineImg.src = gifList[gifList.length - 1]; // Last GIF when limit reached
    }

    // Make "Yes" button bigger (grows faster each time)
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 15) + "px"; // Increased growth rate
    yesBtn.style.padding = "15px 30px"; // Adjust button padding to scale with size
  }

  // Change "No" button text
  if (textClickCount < noTexts.length) {
    noBtn.innerText = noTexts[textClickCount];
    textClickCount++;
  }
});
