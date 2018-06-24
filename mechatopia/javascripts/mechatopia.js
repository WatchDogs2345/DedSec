var game = new Phaser.Game('100', '100', Phaser.AUTO, 'Mechatopia', { preload: preload, create: create, update: update });

var title;
var buttonStart;

function resize(scale, parentBounds) {
  titleResize(parentBounds.height, parentBounds.width);
  buttonStartResize(parentBounds.height, parentBounds.width);
}

function titleResize(height, width) {
  if(title) {
    title.height = height;
    title.width = width;
  }
}

function buttonStartResize(height, width) {
  if(buttonStart) {
    buttonStart.height = height/10;
    buttonStart.width = width/10;
    buttonStart.y = 3*height/4 - buttonStart.height/2;
    buttonStart.x = width/2 - buttonStart.width/2;
  }
}

function over() {
  console.log('button over');
}

function out() {
  console.log('button out');
}

function down() {
  console.log('button down', arguments);
}

function up() {
  console.log('button up', arguments);
}

function actionOnClick () {
  console.log('actionOnClick');
}

function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.RESIZE
  game.scale.setResizeCallback(resize);

  game.load.image('title', 'images/title.png');
  game.load.spritesheet('button_start', 'images/button_start_sprite_sheet.png', 145, 100);
}

function create() {
  title = game.add.sprite(0, 0, 'title');
  titleResize(game.world.height, game.world.width);
  buttonStart = game.add.button(0, 0, 'button_start', actionOnClick, this, 2, 1, 0);
  buttonStartResize(game.world.height, game.world.width);

  buttonStart.onInputOver.add(over, this);
  buttonStart.onInputOut.add(out, this);
  buttonStart.onInputDown.add(down, this);
  buttonStart.onInputUp.add(up, this);
}

function update() {
}
