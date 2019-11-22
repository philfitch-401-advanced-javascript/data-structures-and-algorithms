class Node {
  constructor(value) 
  {
    this.value = value,
    this.next = null;
  }
}

class Stack {
  constructor()
  {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop() {
    let current = this.top;
    this.top = current.next;
    this.size--;
    return current.value;
  }

  peek() {
    return this.top.value;
  }

  isEmpty() {

  }
}

class Queue {
  constructor()
  {
    this.front = null;
    this.size = 0;
  }

  enqueue(value) {
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

  dequeue() {
    let current = this.front;
    this.front = current.next;
    this.size--;
    return current.value;
  }

  peek() {
    return this.front.value;
  }

  isEmpty() {

  }
}

module.exports = { Stack, Queue };
