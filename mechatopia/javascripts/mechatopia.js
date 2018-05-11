var game = new Phaser.Game('100', '100', Phaser.AUTO, 'Mechatopia', { preload: preload, create: create, update: update });

var title;

function resize(scale, parentBounds) {
  titleResize(parentBounds.height, parentBounds.width);
}

function titleResize(height, width) {
  if(title) {
    title.height = height;
    title.width = width;
  }
}

function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.RESIZE
  game.scale.setResizeCallback(resize);

  game.load.image('title', 'images/title.png');
}

function create() {
  title = game.add.sprite(0, 0, 'title');
  titleResize(game.world.height, game.world.width);
}

function update() {
}
