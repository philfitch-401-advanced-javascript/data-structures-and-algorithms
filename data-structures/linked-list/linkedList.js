
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
}

module.exports = LinkedList;
