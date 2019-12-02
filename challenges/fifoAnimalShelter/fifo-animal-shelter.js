
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
}

module.exports = { AnimalShelter };