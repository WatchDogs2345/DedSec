var game = new Phaser.Game('100', '100', Phaser.AUTO, 'Mechatopia', { preload: preload, create: create, update: update });

function preload() {
  game.load.image('title', 'images/title.png');
}

function create() {
  var sprite;

  sprite = game.add.sprite(0, 0, 'title');
  sprite.height = game.world.height;
  sprite.width = game.world.width;
}

function update() {
}
