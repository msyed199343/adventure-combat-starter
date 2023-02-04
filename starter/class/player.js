const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }



  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {

    // Fill this in
    let item = this.currentRoom.getItemByName(itemName)
    let index = this.currentRoom.items.indexOf(item)

   this.items.push(item)

    this.currentRoom.items.splice(index, 1)


  }

  dropItem(itemName) {
    let item = this.getItemByName(itemName)
    let index = this.items.indexOf(item)

   this.currentRoom.items.push(item)

    this.items.splice(index, 1)

  }

  eatItem(itemName) {
    let item = this.getItemByName(itemName)
    let index = this.items.indexOf(item)

    item instanceof Food ? this.items.splice(index, 1) : console.log("You can't eat that!")

  }

  getItemByName(name) {
    return this.items.find(i => i.name === name)
    // Fill this in

  }

  hit(name) {

    // Fill this in
    let enemy = this.findEnemyByName(name)
      enemy.health -= this.strength
      enemy.attackTarget = this


  }

  findEnemyByName(enemyName){
    let enemies = this.currentRoom.getEnemies()

     return enemies.find(i => i.name === enemyName)
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
