// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.querySelector("#noun1");
const verbButton = document.querySelector("#verb");
const adjectiveButton = document.querySelector("#adjective");
const noun2Button = document.querySelector("#noun2");
const settingButton = document.querySelector("#setting");

// Constants for p tag to display query selectors
const displayNoun1 = document.querySelector("#choosenNoun1");
const displayVerb = document.querySelector("#choosenVerb");
const displayAdjective = document.querySelector("#choosenAdjective");
const displayNoun2 = document.querySelector("#choosenNoun2");
const displaySetting = document.querySelector("#choosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.querySelector("#playback");
const randomButton = document.querySelector("#random");
const story = document.querySelector("#story");

const studentInfoButton = document.querySelector("#studentButton");
const displayStudentInfo = document.querySelector("#studentId");

// Variables for pre-defined arrays
var noun1Array = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var verbArray = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjectiveArray = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var noun2Array = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var settingArray = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
var noun1Count = 0;
var verbCount = 0;
var adjectiveCount = 0;
var noun2Count = 0;
var settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    var noun1 = noun1Array[noun1Count];
    displayNoun1.textContent = noun1;
    // if-else to change count setting
    if (noun1Count < noun1Array.length - 1) {
        noun1Count++;
    }
    else {
        noun1Count = 0;
    }
}

function verb_on_click() {
    var verb = verbArray[verbCount];
    displayVerb.textContent = verb;

    if (verbCount < verbArray.length - 1) {
        verbCount++;
    }
    else {
        verbCount = 0;
    }
}

function adjective_on_click() {
    var adjective = adjectiveArray[adjectiveCount];
    displayAdjective.textContent = adjective;

    if (adjectiveCount < adjectiveArray.length - 1) {
        adjectiveCount++;
    }
    else {
        adjectiveCount = 0;
    }
}

function noun2_on_click() {
    var noun2 = noun2Array[noun2Count];
    displayNoun2.textContent = noun2;

    if (noun2Count < noun2Array.length - 1) {
        noun2Count++;
    }
    else {
        noun2Count = 0;
    }
}

function setting_on_click() {
    var setting = settingArray[settingCount];
    displaySetting.textContent = setting;

    if (settingCount < settingArray.length - 1) {
        settingCount++;
    }
    else {
        settingCount = 0;
    }
}

// concatenate the user story and display
function playback_on_click() {
    var noun1 = displayNoun1.textContent;
    var verb = displayVerb.textContent;
    var adjective = displayAdjective.textContent;
    var noun2 = displayNoun2.textContent;
    var setting = displaySetting.textContent;

    story.textContent = noun1 + " " + verb + " " + adjective + " " + noun2 + " " + setting;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    var randomNoun1 = noun1Array[Math.floor(Math.random() * noun1Array.length)];
    var randomVerb = verbArray[Math.floor(Math.random() * verbArray.length)];
    var randomAdjective = adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];
    var randomNoun2 = noun2Array[Math.floor(Math.random() * noun2Array.length)];
    var randomSetting = settingArray[Math.floor(Math.random() * settingArray.length)];

    story.textContent = randomNoun1 + " " + randomVerb + " " + randomAdjective + " " + randomNoun2 + " " + randomSetting;
}

// display preset student info
function student_info_on_click() {
    displayStudentInfo.textContent = "Name: Cole Winkler-Sawdon | Student ID: 1258159";
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);
studentInfoButton.addEventListener("click", student_info_on_click);