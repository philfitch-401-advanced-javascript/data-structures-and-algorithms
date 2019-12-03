
class Node {
  constructor(value) 
  {
    this.value = value,
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor()
  {
    this.root = null;
  }

  add(value) {
    let node = new Node(value);
    if(this.root === null) {
      return this.root = node;
    }
    if(!this.left) {
      return this.left = node;
    }
    if(!this.right) {
      return this.right = node;
    }
    
  }

  contains(value) {

  }

  preOrder() {

  }

  inOrder() {

  }

  postOrder() {

  }
}

class BinarySearchTree {
  constructor()
  {
    this.root = null;
  }

  add(value) {
    let node = new Node(value);
    if(this.root === null) {
      return this.root = node;
    }
    if(value < this.value && this.left) {
      this.left.add(value);
    } else {
      return this.left = node;
    }
    if(value > this.value && this.right) {
      this.right.add(value);
    } else {
      return this.right = node;
    }
    console.log('Value already exists');
  }

  contains(value) {

  }

  preOrder() {

  }

  inOrder() {

  }

  postOrder() {

  }
}

module.exports = { BinaryTree, BinarySearchTree };
