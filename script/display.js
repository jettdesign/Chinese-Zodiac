/*
Declare/set variables
****************************************/
var firstName;
var lastName;
var bday;
var currentDate;

var messageString = ""
var zodiacSign = "";

var messageText = document.getElementById("message");

var mouse = document.getElementById('mouse')
var ox = document.getElementById('ox')
var tiger = document.getElementById('tiger')
var cat = document.getElementById('cat')
var dragon = document.getElementById('dragon')
var snake = document.getElementById('snake')
var horse = document.getElementById('horse')
var goat = document.getElementById('goat')
var monkey = document.getElementById('monkey')
var rooster = document.getElementById('rooster')
var dog = document.getElementById('dog')
var pig = document.getElementById('pig')

var mouseSound = document.getElementById('s_mouse');
var oxSound = document.getElementById('s_ox');
var tigerSound = document.getElementById('s_tiger');
var catSound = document.getElementById('s_cat');
var dragonSound = document.getElementById('s_dragon');
var snakeSound = document.getElementById('s_snake');
var horseSound = document.getElementById('s_horse');
var goatSound = document.getElementById('s_goat');
var monkeySound = document.getElementById('s_monkey');
var roosterSound = document.getElementById('s_rooster');
var dogSound = document.getElementById('s_dog');
var pigSound = document.getElementById('s_pig');

var allpics = document.getElementById('allpics');

var backgroundAudio = document.getElementById('s_bg');
var play = false;

/*
Register Event Listeners
****************************************/
mouse.addEventListener("click",function(evt){
  console.log("mouse_clicked");
  renderZodiac('Mouse');
}, false);
ox.addEventListener('click',function(evt){
  console.log("ox_click");
  renderZodiac('Ox');
}, false);
tiger.addEventListener('click',function(evt){
  console.log("tiger_clicked");
  renderZodiac('Tiger');
}, false);
cat.addEventListener('click',function(evt){
  console.log("cat_clicked");
  renderZodiac('Cat');
}, false);
dragon.addEventListener('click',function(evt){
  console.log("dragon_clicked");
  renderZodiac('Dragon');
}, false);
snake.addEventListener('click',function(evt){
  console.log("snake_clicked");
  renderZodiac('snake');
}, false);
horse.addEventListener('click',function(evt){
  console.log("horse_clicked");
  renderZodiac('Horse');
}, false);
goat.addEventListener('click',function(evt){
  console.log("goat_clicked");
  renderZodiac('Goat');
}, false);
monkey.addEventListener('click',function(evt){
  console.log("monkey_clicked");
  renderZodiac('Monkey');
}, false);
rooster.addEventListener('click',function(evt){
  console.log("rooster_clicked");
  renderZodiac('Rooster');
}, false);
dog.addEventListener('click',function(evt){
  console.log("dog_clicked");
  renderZodiac('Dog');
}, false);

pig.addEventListener('click',function(evt){
  console.log("pig_clicked");
  renderZodiac('Pig');
}, false);


/*
Find the Zodiac based on form input
****************************************/
function findZodiac(){
  firstName = document.getElementById("inputFirstName").value;
  lastName = document.getElementById("inputLastName").value;
  bday = document.getElementById("inputBirthday").valueAsDate;
  currentDate = new Date();
  zodiacSign = "";

  var age = currentDate.getFullYear() - bday.getFullYear();

  if ( bday.getMonth() > currentDate.getMonth() ){
    age --;
  } else if (bday.getMonth() == currentDate.getMonth() && bday.getDate() > currentDate.getDate() ) {
    age --;
  }
  if ((bday.getFullYear() % 12) === 4) {
    zodiacSign = 'Mouse';
  } else if ((bday.getFullYear() % 12) === 5) {
    zodiacSign = 'Ox';
  } else if ((bday.getFullYear() % 12) === 6) {
    zodiacSign = 'Tiger';
  } else if ((bday.getFullYear() % 12) === 7) {
    zodiacSign = 'Cat';
  } else if ((bday.getFullYear() % 12) === 8) {
    zodiacSign = 'Dragon';
  } else if ((bday.getFullYear() % 12) === 9) {
    zodiacSign = 'Snake';
  } else if ((bday.getFullYear() % 12) === 10) {
    zodiacSign = 'Horse';
  } else if ((bday.getFullYear() % 12) === 11) {
    zodiacSign = 'Goat';
  } else if ((bday.getFullYear() % 12) === 0) {
    zodiacSign = 'Monkey';
  } else if ((bday.getFullYear() % 12) === 1) {
    zodiacSign = 'Rooster';
  } else if ((bday.getFullYear() % 12) === 2) {
    zodiacSign = 'Dog';
  } else if ((bday.getFullYear() % 12) === 3) {
    zodiacSign = 'Pig';
  }
  messageString = "Nice, " + firstName + " " + lastName + "! You are " + age + " years old" + " and your animal is: " + zodiacSign;
  renderZodiac(zodiacSign, messageString);
}

/*
Render the message
****************************************/
function renderZodiac(zodiac, message){
  console.log("Rendering Zodiac...", zodiac);
  if(message){
    messageText.innerHTML = message;
  }else{
    messageText.innerHTML = "Zodiac: " + zodiac;
  }
  var zodiacImgArray = resultZodiac.children;

  console.log("Processing Zodiac Image Array...", zodiacImgArray.length);
  for(i = 0; i< zodiacImgArray.length; i++){
    zodiacImgArray[i].classList.remove('show')
  }

  zodiac = zodiac.toLowerCase();

  if(zodiac === 'mouse'){
    zodiacImgArray[0].classList.add('show');
    mouseSound.play();
  }else if(zodiac === 'ox'){
    zodiacImgArray[1].classList.add('show');
    oxSound.play();
  }else if(zodiac === 'tiger'){
    zodiacImgArray[2].classList.add('show');
    tigerSound.play();
  }else if(zodiac === 'cat'){
    zodiacImgArray[3].classList.add('show');
    catSound.play();
  }else if(zodiac === 'dragon'){
    zodiacImgArray[4].classList.add('show');
    dragonSound.play();
  }else if(zodiac === 'snake'){
    zodiacImgArray[5].classList.add('show');
    snakeSound.play();
  }else if(zodiac === 'horse'){
    zodiacImgArray[6].classList.add('show');
    horseSound.play();
  }else if(zodiac === 'goat'){
    zodiacImgArray[7].classList.add('show');
    goatSound.play();
  }else if(zodiac === 'monkey'){
    zodiacImgArray[8].classList.add('show');
    monkeySound.play();
  }else if(zodiac === 'rooster'){
    zodiacImgArray[9].classList.add('show');
    roosterSound.play();
  }else if(zodiac === 'dog'){
    zodiacImgArray[10].classList.add('show');
    dogSound.play();
  }else if(zodiac === 'pig'){
    zodiacImgArray[11].classList.add('show');
    pigSound.play();
  }else{
    zodiacImgArray[0].classList.add('show');
  }
}

/*
Additional Functions
****************************************/
function playAudio() {
  console.log ("playing");
  if (play) {
    backgroundAudio.pause();
  } else {
    backgroundAudio.play();
  }
};

backgroundAudio.onplaying = function() {
  play = true;
};
backgroundAudio.onpause = function() {
  play = false;
};

function navigation() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}