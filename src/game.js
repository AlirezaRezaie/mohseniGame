let mohseni, wall, background;
let direction = "up";
let minHeight = 300;
let maxHeight = 900;
let speed;

var config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 900,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};
var audio = new Audio("audio/Squid Game - Bgm.mp3");

var game = new Phaser.Game(config);

function mohseniMovment() {
  if (direction == "up") {
    mohseni.y -= speed;
    if (mohseni.y < minHeight) {
      direction = "down";
    }
  }
  if (direction == "down") {
    mohseni.y += speed;
    if (mohseni.y > maxHeight) {
      direction = "up";
    }
  }
}

function preload() {
  this.load.image("bg", "assets/squid_game_background.jpg");
  this.load.image("mohseni", "assets/mohseni.png");
  this.load.image("wall", "assets/wall.jpg");
  this.load.audio("squid-song", "");
}

function create() {
  audio.play();
  background = this.add.image(400, 300, "bg");
  mohseni = this.add.image(400, 600, "mohseni");
  wall = this.add.image(50, 1100, "wall");
}

function update() {
  speed = Math.floor(Math.random() * 19);
  if (game.input.mousePointer.isDown && mohseni.y < 600) {
    //
    speed = 0;
    console.log("are");
  } else {
    //
    speed = Math.floor(Math.random() * 19);
  }
  mohseniMovment();
}
