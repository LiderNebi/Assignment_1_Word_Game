// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
var synth = window.speechSynthesis;

var nouns1 = [
  "Lider",
  "Giselo",
  "The teacher",
  "The elephant",
  "The ant eater",
];
var verbs = ["jumped on the", "laughed at the", "ate", "saw", "liked"];
var adjectives = ["funny", "scary", "dirty", "tall", "barking"];
var nouns2 = ["", "monkey", "fish", "cow", "frog"];
var places = [
  "on the moon",
  "under the table",
  "in my spaghetti",
  "at the school",
  "at Georgian College",
];

var textToSpeak = "";
var storyArea = document.getElementById("storyArea");

/* Functions
-------------------------------------------------- */
function getRandomWord(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Adding a random word
function addAndSpeakWord(categoryArray) {
  var word = getRandomWord(categoryArray);
  textToSpeak += word + " ";
  storyArea.textContent = textToSpeak; // Display the current state of the story
  speakWord(word); // Speak the word
}

// Single word
function speakWord(word) {
  var utterThis = new SpeechSynthesisUtterance(word);
  synth.speak(utterThis);
}

// Random story
function generateAndSpeakStory() {
  textToSpeak = `${getRandomWord(nouns1)} ${getRandomWord(
    verbs
  )} ${getRandomWord(adjectives)} ${getRandomWord(nouns2)} ${getRandomWord(
    places
  )}.`;
  storyArea.textContent = textToSpeak;
  speakWord(textToSpeak);
}

function speakNow() {
  var utterThis = new SpeechSynthesisUtterance(textToSpeak);
  synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
document.getElementById("noun1Button").onclick = function () {
  addAndSpeakWord(nouns1);
};
document.getElementById("verbButton").onclick = function () {
  addAndSpeakWord(verbs);
};
document.getElementById("adjectiveButton").onclick = function () {
  addAndSpeakWord(adjectives);
};
document.getElementById("noun2Button").onclick = function () {
  addAndSpeakWord(nouns2);
};
document.getElementById("placeButton").onclick = function () {
  addAndSpeakWord(places);
};

document.getElementById("generateStoryButton").onclick = generateAndSpeakStory;
document.getElementById("speakButton").onclick = speakNow;

document.getElementById("resetButton").onclick = function () {
  textToSpeak = "";
  storyArea.textContent = "The story will appear here...";
  synth.cancel(); //Stop when click
};

// Placeholder
storyArea.textContent = "The story begins...";
