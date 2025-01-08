let char = new Knight('Zoro');
let monster = new LightEnemy('Pirate');

const stage = new Stage(
  char,
  monster,
  document.querySelector('#char'),
  document.querySelector('#monster')
);

stage.start()