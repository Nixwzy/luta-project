class Character {
  _life = 1;
  maxLife = 1;
  attack = 0;
  defense = 0;

  constructor(name) {
    this.name = name;
  }

  get life() {
    return this._life;
  }

  set life(newLife) {
    this._life = newLife < 0 ? 0 : newLife; // Faz com que qualquer valor de 'life' menor que 0, retorne para 0, evitando bugs.
  }
}

class Knight extends Character {
  constructor(name) {
    super(name);
    this.life = 100;
    this.attack = 10;
    this.defense = 8;
    this.maxLife = this.life;
  }
}

class Sorcerer extends Character {
  constructor(name) {
    super(name);
    this.life = 80;
    this.attack = 15;
    this.defense = 3;
    this.maxLife = this.life;
  }
}

class LightEnemy extends Character {
  constructor(name) {
    super(name);
    this.life = 40;
    this.attack = 4;
    this.defense = 4;
    this.maxLife = this.life;
  }
}

class HeavyEnemy extends Character {
  constructor(name) {
    super(name);
    this.life = 120;
    this.attack = 16;
    this.defense = 6;
    this.maxLife = this.life;
  }
}

class Stage {
  constructor(player1, player2, player1info, player2info) {
    this.player1 = player1;
    this.player2 = player2;
    this.player1info = player1info;
    this.player2info = player2info;
  }

  start() {
    this.update();
    

  }

  update() {
    // All 'Info' is related to visual elements on HTML
    // Player 1 Info
    this.player1info.querySelector('.name').innerHTML = `${this.player1.name} | ${this.player1.life} HP`;
    let p1Pct = (this.player1.life / this.player1.maxLife * 100)
    this.player1info.querySelector('.bar').style.width= `${p1Pct}%`
    // Player 2 Info
    this.player2info.querySelector('.name').innerHTML = `${this.player2.name} | ${this.player2.life} HP`
    let p2Pct = (this.player2.life / this.player2.maxLife * 100)
    this.player2info.querySelector('.bar').style.width= `${p2Pct}%`
  }
}
