
// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
class Node {
  constructor(value) {
    this.value = value,
    this.next = null;
  }
}

class LinkedList {
  // Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
  constructor() {
    this.head = null,
    this.size = 0;
  }
  // Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }
  // Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
  includes(value) {
    let current = this.head;
    while(current) {
      if(current === value) {
        return true;
      } 
      current = this.next;
    }
    return false;
  }
  // Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List.
  toString() {
    let current = this.head;
    let values = ``;
    while(current) {
      const value = (this.value).toString;
      values += `${value}, `;
    }
    return values;
  }
}

module.exports = { Node, LinkedList };
