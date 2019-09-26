
class Node {
  constructor(value) {
    this.value = value,
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null,
    this.size = 0;
  }
  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }
}