var hypnoticBall, database;
var position;
var canvas;
var gameState = 0;
var playerCount = 0;
var form;
var player;
var name;
var allPlayers;


function setup(){
  
  canvas = createCanvas(400,400);
  database = firebase.database();
  //console.log(database);
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
if(playerCount===4){
  game.update(1);}
  if (gameState===1){
    clear();
    game.play();

  }
  console.log(player.index);
  console.log(playerCount);
}

