
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
    traverseAdd(node, this.root);
    function traverseAdd(node, current) {
      if(node.value < current.value) {
        if(!current.left) {
          return current.left = node;
        }
        current.left.traverseAdd(node, current.left);
      } 
      if(node.value > current.value) {
        if(!current.right) {
          return current.right = node;
        }
        current.right.traverseAdd(node, current.right);
      }
      console.log('Value already exists');
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

module.exports = { BinaryTree, BinarySearchTree };
