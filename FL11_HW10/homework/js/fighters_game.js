class Fighter {
  constructor (obj){
    const hundred = 100 
    this._name = obj.name;
    this._damage = obj.damage;
    this._hp = obj.hp;
    this._agility = obj.agility;
    this._wins = 0;
    this._loses = 0;

    this.getName = () => this._name
    this.getHp = () => this._hp
    this.attack = function(e) {
      const chance = Math.random()
      console.log(chance)
      let miss = e._agility / hundred
      if ( chance <= 1 - miss ){
        e._hp = e._hp - this._damage
        console.log(`${this._name} make ${this._damage} to ${e._name}`)
        return e._hp
      } else {
        console.log(`${this._name} attack missed`)
      }
    }
    this.heal = (e) => {
      this._hp = this._hp + e
      return this._hp
    }
    this.dealDamage = (e) => {
      this._hp = this._hp - e
      return this._hp
    }
    this.logCombatHistory = () => {
      return `Name: ${this._name} wins: ${this._wins} loses: ${this._loses}`
    }
    this.addWin = () => { 
      this._wins++
    }  
    this.addLose = () => {
      this._loses++
    } 
  }
}

function battle(warriorFirst, warriorSecond) {

  let fight = true
  const negNum = -1

  if(warriorFirst.getHp() <= 0 || warriorSecond.getHp() <= 0) {
    if (warriorFirst.getHp() <= 0) {
      return console.log(`${warriorFirst.getName()} is dead and cant fight`)
    } else if (warriorSecond.getHp() <= 0) {
      return console.log(`${warriorSecond.getName()} is dead and cant fight`)
    }
  }

  while(fight){
    if(warriorFirst.getHp() <= 0) {
      console.log(`${warriorFirst.getName()} lose`)
      warriorFirst.heal(warriorFirst.getHp()*-negNum)
      warriorFirst.addLose()
      warriorSecond.addWin()
      break
    }
    warriorFirst.attack(warriorSecond)
    if(warriorSecond.getHp() <= 0) {
      console.log(`${warriorSecond.getName()} lose`)
      warriorSecond.heal(warriorSecond.getHp()*-negNum)
      warriorFirst.addWin()
      warriorSecond.addLose()
      break
    }
    warriorSecond.attack(warriorFirst)
  }
}


const ivan = new Fighter( {name: 'Ivan', damage: 20, hp: 100, agility: 30} )
const petr = new Fighter( {name: 'Petr', damage: 40, hp: 100, agility: 15} )

battle(ivan, petr)