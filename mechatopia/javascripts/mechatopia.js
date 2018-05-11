var game = new Phaser.Game('100', '100', Phaser.AUTO, 'Mechatopia', { preload: preload, create: create, update: update });

var title;

function resize(scale, parentBounds) {
  if(title) {
    title.height = parentBounds.height;
    title.width = parentBounds.width;
  }
}

function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.RESIZE
  game.scale.setResizeCallback(resize);

  game.load.image('title', 'images/title.png');
}

function create() {
  title = game.add.sprite(0, 0, 'title');
}

function update() {
}
