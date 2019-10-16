
class Node {
  constructor(value) 
  {
    this.value = value,
    this.next = null;
  }
}

class LinkedList {

  constructor() 
  {
    this.head = null,
    this.size = 0;
  }

  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }
  
  includes(value) {
    let current = this.head;
    let values = [];
    while(current) {
      values.push(`${current.value}`);
      current = current.next;
    }
    if(values.includes(value)) {
      return true;
    }
    return false;
  }
  
  toString() {
    let current = this.head;
    let values = [];
    while(current) {
      values.push(`${current.value}`);
      current = current.next;
    }
    let valueString = `${values[0]}`;
    for(let i = 1; i < values.length; i++) {
      valueString += `, ` + `${values[i]}`;
    }
    return valueString;
  }

  append(value) {
    let node = new Node(value);
    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
  }

  insertBefore(value, newVal) {
    let node = new Node(newVal);
    let current = this.head;
    while(current.next.value !== value) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }

  insertAfter(value, newVal) {
    let node = new Node(newVal);
    let current = this.head;
    while(current.value !== value) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }
}

module.exports = LinkedList;
