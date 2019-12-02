
const { Node } = require('../../data-structures/stacks-and-queues/stacksAndQueues');

class AnimalShelter {
  constructor()
  {
    this.front = null;
    this.size = 0;
  }

  enqueue(value) {
    if(!(value === 'dog' || value === 'cat')) {
      return console.log('This is a dog and cat only shelter!');
    }
    let node = new Node(value);
    if(this.front === null) {
      this.front = node;
    } else {
      let current = this.front;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  dequeue(value) {
    let inventory = [];
    while(this.front) {
      inventory.push(this.front.value);
      this.front = this.front.next;
      this.size--;
    }
    if(!inventory.includes(value)) {
      while(inventory[0]) {
        let animal = inventory.shift();
        this.enqueue(animal);
      }
      return null;
    }
    let index = inventory.indexOf(value);
    let result = inventory.splice(index, 1);
    while(inventory[0]) {
      let animal = inventory.shift();
      this.enqueue(animal);
    }
    return result[0];
    

  }
}

module.exports = { AnimalShelter };