class Character {

  constructor(name, description, currentRoom) {
    this.name = name
    this.description = description
    this.currentRoom = currentRoom
    this.items = []
    this.strength = 10;
    this.health = 100;
  }

  applyDamage(amount) {
    // Fill this in
    this.health -= amount
    this.health === 0 ? this.die() : ""
  }

  die() {
    // Fill this in
    this.currentRoom.items = this.currentRoom.items.concat(this.items)
    this.items = []
    this.currentRoom = null
  }

}

module.exports = {
  Character,
};
