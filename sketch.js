var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form, game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;

var score = 0;

function preload(){

  // Loading the image of the background
  back_img = loadImage("jungle.jpg");

  // Loading the image of the basket
  player_img = loadImage("basket2.png");

  // Loading the images of the fruits
  fruit1_img = loadImage("apple2.png");
  fruit2_img = loadImage("banana2.png");
  fruit3_img = loadImage("melon2.png");
  fruit4_img = loadImage("orange2.png");
  fruit5_img = loadImage("pineapple2.png");
  fruitGroup = new Group();
}
function setup(){
  createCanvas(1000, 600);
  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){
  background(back_img);
  
  // If both the players have joined
  if (playerCount === 2) {

    game.update(1);
  }

  // If gameState is in play
  if (gameState === 1) {
    clear(); 
    game.play();
  }

  // If game ends
  if (gameState === 2) {
   
    game.end();
  }

  /* textSize(15);
  fill("red");
  text("Player 1 Score : "+player); */

  console.log(gameState);
}