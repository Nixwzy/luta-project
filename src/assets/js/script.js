let log = new Log(document.querySelector('.log'));

let char = new Knight('Zoro');
let monster = new HeavyEnemy('Pirate');

const stage = new Stage(
  char,
  monster,
  document.querySelector('#char'),
  document.querySelector('#monster'),
  log
);

stage.start();