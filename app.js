'use strict';

var arrProducts = [];
var TotalClickCounter = 0;

function Products(productName, imgLocation) {  //Function constructor for each of my products
  this.productName = productName; //name or type of product
  this.imgLocation = imgLocation; //Where the image is stored locally
  this.timesShown = 0; // how many times has this image been shown already
  this.timesClicked = 0; // how many times did the user click on this item?
  arrProducts.push(this); // push this object(Product) into an array of my arrProducts
}

var bag = new Products('bag', 'assets/bag.jpg');
var banana = new Products('banana', 'assets/banana.jpg');
var bathroom = new Products('bathroom fixture', 'assets/bathroom.jpg');
var boots = new Products('boots', 'assets/boots.jpg');
var breakfast = new Products('breakfast maker', 'assets/breakfast.jpg');
var bubbleGum = new Products('meatball bubblegum', 'assets/bubblegum.jpg');
var chair = new Products('chair', 'assets/chair.jpg');
var cthulhu = new Products('cthulhu', 'assets/cthulhu.jpg');
var dogDuck = new Products('dog duck', 'assets/dog-duck.jpg');
var dragon = new Products('dragon meat', 'assets/dragon.jpg');
var pen = new Products('cutlery pens', 'assets/pen.jpg');
var petSweep = new Products('pet sweeper', 'assets/pet-sweep.jpg');
var scissors = new Products('scissors', 'assets/scissors.jpg');
var shark = new Products('toy shark', 'assets/shark.jpg');
var babySweep = new Products('baby sweeper', 'assets/sweep.png');
var tauntaun = new Products('tuantuan', 'assets/tauntaun.jpg');
var unicorn = new Products('unicorn meat', 'assets/unicorn.jpg');
var usb = new Products('usb tentacle', 'assets/usb.gif');
var waterCan = new Products('water can', 'assets/water-can.jpg');
var wineGlass = new Products('pet sweeper', 'assets/wine-glass.jpg');

var frameOne = document.getElementById('frame_one');
var frameTwo = document.getElementById('frame_two');
var frameThree = document.getElementById('frame_three');

var allFrames = [frameOne, frameTwo, frameThree];

function rng(min, max) { //helper function to find a random number
  return Math.floor(Math.random() * (max - min)) + min;
}

function findRandomPicture() { // function will assign 3 values to the 3 frames
  for (var i = 0; i < allFrames.length; i++) {
    allFrames[i] = rng(0, arrProducts.length);
  }
  console.log(allFrames);
  return allFrames;
}

function checkForDupePhoto() { //function to find three unique photos
  for (var i = 0; i < allFrames.length; i++) {

  }
}
