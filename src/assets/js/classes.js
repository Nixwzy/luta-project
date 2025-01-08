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
  constructor(player1, player2, player1info, player2info, logObject) {
    this.player1 = player1;
    this.player2 = player2;
    this.player1info = player1info;
    this.player2info = player2info;
    this.log = logObject;
  }

  start() {
    this.update();
    this.player1info
      .querySelector('.attackButton')
      .addEventListener('click', () => this.attack(this.player1, this.player2));
    this.player2info
      .querySelector('.attackButton')
      .addEventListener('click', () => this.attack(this.player2, this.player1));
  }

  update() {
    // All 'Info' is related to visual elements on HTML
    // Player 1 Info
    this.player1info.querySelector('.name').innerHTML = `${
      this.player1.name
    } | ${this.player1.life.toFixed(1)} HP`;
    let p1Pct = (this.player1.life / this.player1.maxLife) * 100;
    this.player1info.querySelector('.bar').style.width = `${p1Pct}%`;
    // Player 2 Info
    this.player2info.querySelector('.name').innerHTML = `${
      this.player2.name
    } | ${this.player2.life.toFixed(1)} HP`;
    let p2Pct = (this.player2.life / this.player2.maxLife) * 100;
    this.player2info.querySelector('.bar').style.width = `${p2Pct}%`;
  }

  attack(attacker, target) {
    if (attacker.life <= 0 || target.life <= 0) {
      this.log.addMessage('Target is already beaten.');
      return;
    }

    let randomDamageMultiplier = (Math.random() * 2).toFixed(2); // Multiplica o dano base a um número aleatório máximo de 2.00
    let randomDefenseMultiplier = (Math.random() * 2).toFixed(2); // Faz o mesmo com a defesa

    let trueDamage = attacker.attack * randomDamageMultiplier; // Dano final
    let trueDefense = attacker.attack * randomDefenseMultiplier; // Defesa final

    if (trueDamage > trueDefense) {
      target.life -= trueDamage;
      this.log.addMessage(
        `${attacker.name} dealt ${trueDamage.toFixed(2)} damage to ${
          target.name
        }.`
      );
    } else {
      target.life -= trueDamage * 0.75;
      this.log.addMessage(
        `${target.name} managed to defend ${
          attacker.name
        }'s attack and the damage was reduced to ${trueDamage.toFixed(2)}`
      );
    }
    this.update();
  }
}

class Log {
  // All Info is based on HTML elements
  list = [];

  constructor(listInfo) {
    this.listInfo = listInfo;
  }
  addMessage(msg) {
    this.list.push(msg);
    this.render();
  }

  render() {
    // Função que cria um novo li para adicionar ao Log.
    this.listInfo.innerHTML = '';
    for (let i in this.list) {
      this.listInfo.innerHTML += `<li>${this.list[i]}</li>`;
    }
  }
}
