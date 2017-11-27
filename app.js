'use strict';

var arrProducts = [];
var totalClickCounter = 0;
var threeRandomNumbers = [];
var myChart = null;

function Products(productName, imgLocation) { //Function constructor for each of my products
  this.productName = productName; //name or type of product
  this.imgLocation = imgLocation; //Where the image is stored locally
  this.timesShown = 0; // how many times has this image been shown already
  this.timesClicked = 0; // how many times did the user click on this item?
  arrProducts.push(this); // push this object(Product) into an array of my arrProducts
}

//instantiating my objects
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

function checkForDupeNumber(numberOne, numberTwo, numberThree) { //function to find three unique photos
  if (numberOne === numberTwo || numberOne === numberThree || numberTwo === numberThree) {
    findThreeUniqueRandomNumbers();
  }
  return;
}

function findThreeUniqueRandomNumbers() { // function will assign 3 values to the 3 frames
  for (var i = 0; i < allFrames.length; i++){
    threeRandomNumbers[i] = rng(0, arrProducts.length);
  }
  checkForDupeNumber(threeRandomNumbers[0], threeRandomNumbers[1], threeRandomNumbers[2]);
  return threeRandomNumbers;
}



function displayThreeRandomPhotos() {
  for (var i = 0; i < allFrames.length; i++) {
    allFrames[i].src = arrProducts[threeRandomNumbers[i]].imgLocation;
  }
  return allFrames;
}

function imgClicked(frameClicked) {
  totalClickCounter ++;
  if (totalClickCounter <= 25) {
    arrProducts[threeRandomNumbers[frameClicked]].timesClicked ++;
    findThreeUniqueRandomNumbers();
    displayThreeRandomPhotos();
    if (totalClickCounter >= 25) {
      showButton();
    }
  }
}

function showButton(){
  var button = document.createElement('button');
  button.innerHTML = 'See data';
  var addButton = document.getElementById('add_button');
  addButton.appendChild(button);
  button.addEventListener('click', displayList);
}
function displayList(){
  var chr = document.getElementById('chart');
  chr.style.visibility = 'visible';
  myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: allProducts.map(function(x) {return x.productName;}),
      datasets: [{
        label: '# of Votes',
        data: allProducts.map(function(x) {return x.timesClicked;}),

        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            max: 10,
            min: 0,
            stepSize: 1,
          }
        }]
      }
    }
  });
}
  // var getDiv = document.getElementById('list_of_results');
  // for (var i = 0; i < arrProducts.length; i++) {
  //   var makeUl = document.createElement('ul');
  //   makeUl.innerHTML = arrProducts[i].productName;
  //   getDiv.appendChild(makeUl);
  //   var makeLi = document.createElement('li');
  //   makeLi.innerHTML = 'Was chosen ' + arrProducts[i].timesClicked + ' times.';
  //   makeUl.appendChild(makeLi);
  // }


var ctx = document.getElementById('my_chart').getContext('2d');
findThreeUniqueRandomNumbers();
displayThreeRandomPhotos();


frameOne.addEventListener('click', function() {
  imgClicked(0);
});
frameTwo.addEventListener('click', function() {
  imgClicked(1);
});
frameThree.addEventListener('click', function() {
  imgClicked(2);
});
