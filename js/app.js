// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Lists of words
var nouns = ["The turkey", "Mom", "Dad","The dog","My teacher","The elephant","The Cat"]; 
var verbs = ["sat on", "ate", "danced with","saw","doesn't","kissed"]; 
var adjs = ["a funny", "a scary", "a goofy","a slimy","a barking","a fat"]; 
var noun2s = ["goat", "monkey", "fish","cow","frog","bug","worm"]; 
var places = ["on the moon", "on the chair", "in my spaghetti","on the grass","in my shoes"]; 
// The text to speak
var textToSpeak = '';
// Get the buttons
var nounBtn = document.getElementById('nounBtn');
var verbBtn = document.getElementById('verbBtn');
var adjBtn = document.getElementById('adjBtn');
var noun2Btn = document.getElementById('noun2Btn');
var placeBtn = document.getElementById('placeBtn');
var speakBtn = document.getElementById('speakBtn');
var randomBtn = document.getElementById('randomBtn');
var resetBtn = document.getElementById('resetBtn');
// Get the story text element
var storyText = document.getElementById('storyText');

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

function getRandomWord(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function addWord(btn, wordArray) {
  btn.onclick = function() {
    textToSpeak += ' ' + getRandomWord(wordArray);
    storyText.textContent = textToSpeak;
  };
}

function generateStory() {
  textToSpeak += ' ' + getRandomWord(nouns);
  textToSpeak += ' ' + getRandomWord(verbs);
  textToSpeak += ' ' + getRandomWord(adjs);
  textToSpeak += ' ' + getRandomWord(noun2s);
  textToSpeak += ' ' + getRandomWord(places);
  storyText.textContent = textToSpeak;
}

/* Event Listeners
-------------------------------------------------- */
addWord(nounBtn, nouns);
addWord(verbBtn, verbs);
addWord(adjBtn, adjs);
addWord(noun2Btn, noun2s);
addWord(placeBtn, places);

speakBtn.onclick = function() {
	speakNow(textToSpeak);
};

randomBtn.onclick = function() {
  textToSpeak = '';
  generateStory();
};

resetBtn.onclick = function() {
  textToSpeak = '';
  storyText.textContent = '';
};
