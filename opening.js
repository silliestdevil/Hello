//letter array 
let letters = []; // letter array 
let letters2 = []; // letter array 
let delayFrames = 240; // 2 seconds to being 
let addedW = false; // Track if first letter has been added 
let delayBetweenLetters = 5; // 1/6 of a second between letters
let nextLetterTime = 0; // Track when to add the next letter
let lettersToAdd = ["N","S","T","R","U","C","T","I","O","N","S"," ","T","O"," ","T","H","E"," ","I","N","T","E","R","F","A","C","E"]; // Letters to add
let lettersToAdd2 = ["C","L","I","C","K"," ","T","O"," ","S","T","A","R","T"]; // Letters to add


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); // WEBGL due to animation 

  topWords = createGraphics(650, 100); //Canvas for first line of text
  topWords.background(0);

  bottomWords = createGraphics(650, 100); //Canvas for second line of text 
  bottomWords.background(0); 


  frameRate(60)// set frame rate 

  //styling for extra canvas's 
  topWords.textSize(20); 
  topWords.textFont('monospace'); 
  bottomWords.textSize(15); 
  bottomWords.textFont('monospace'); 
  
}



function draw(){
  background(0);

  fill(255); 
  stroke(2);
  stroke(18, 69, 26);

 typography(); 

}



// this function animates the text to come in letter by letter
function typography() {

  image(topWords, -350, -250);
  push(); // the title
  topWords.fill(255);

  if (frameCount < delayFrames && !addedW) { //if frame count is smaller than delayframes add first letter
    letters.push("I"); //push the first letter
    addedW = true; // Indicate that first letter have been added
    nextLetterTime = frameCount + delayBetweenLetters; // time in between letters
  }

  if (frameCount >= nextLetterTime && lettersToAdd.length > 0) {
    letters.push(lettersToAdd.shift()); // Add the next letter from the array
    nextLetterTime = frameCount + delayBetweenLetters; //add next letter after 10 frames
  }

  const spacing = 20;// amount of spacing beteen letters 
  // Display the letters from the array
  for (let i = 0; i < letters.length; i++) {
   topWords.text(letters[i], 40 + i * spacing, 60);//display on the extra canvas, add spacing so letters are clear
  }
pop();// the push and pop functions allow me to change the setting for brief parts of the code 

  image(bottomWords, -500, 100);
push(); // repeat for second part of code 

  bottomWords.fill(225);
  if (frameCount < delayFrames && !addedW) {
    letters2.push("C"); // Add "W" only once
    addedW = true; // indicate that "W" has been added
    nextLetterTime = frameCount + delayBetweenLetters;
  }

  if (frameCount >= nextLetterTime && lettersToAdd2.length > 0) {
    letters2.push(lettersToAdd2.shift()); // Add the next letter from the array
    nextLetterTime = frameCount + delayBetweenLetters; //add next letter after 10 frames
  }

  const spacing2 = 20;
  // Display the letters from the array
  for (let i = 0; i < letters2.length; i++) {
   bottomWords.text(letters2[i], 40 + i * spacing2, 60);
  }
pop(); 
}
  // This function will be called when the mouse is pressed
  function mouseIsPressed() {
    window.location.href = "Countdown.html";  // Open the next interface
}

// Add an event listener for the mouse press event
document.addEventListener("mousedown", mouseIsPressed)
//make it happen when the mouse is pressed
//set an 5 second count down 
//A circle is drawn each time a second goes down 

//open this to the facetracking.html 
//Instruction on what face to pull
