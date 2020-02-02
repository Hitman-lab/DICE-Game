// var randomNumber1 = Math.random() * 6;
// randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // this gives random number between 1 to 6

// random images dic1.png - dice6.png
var randomImages1 = "dice" + randomNumber1 + ".png";

// image source path
var randomImageSource1 = "images/"+ randomImages1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

// for Second Dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImages2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/"+ randomImages2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

// players

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}else{
  document.querySelector("h1").innerHTML = "😞Draw!";
}
