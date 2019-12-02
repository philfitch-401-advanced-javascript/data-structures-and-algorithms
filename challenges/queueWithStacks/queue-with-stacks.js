const { Node, Stack } = require('../../data-structures/stacks-and-queues/stacksAndQueues');


class PseudoQueue {
  constructor()
  {
    this.front = null;
    this.size = 0;
    this.queueFront = new Stack();
    this.queueBack = new Stack();
  }

  enqueue(value) {
    while(this.queueFront.top) {
      let element = this.queueFront.pop();
      this.queueBack.push(element);
    }
    this.queueBack.push(value);
    while(this.queueBack.top) {
      let element = this.queueBack.pop();
      this.queueFront.push(element);
    }
    this.front = this.queueFront.peek();
    this.size = this.queueFront.size;
  }

  dequeue() {
    let result = this.queueFront.pop();
    this.front = this.queueFront.peek();
    this.size = this.queueFront.size;
    return result;
  }
}

module.exports = { PseudoQueue };
