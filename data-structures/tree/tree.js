
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
    if(!this.root) {
      return this.root = node;
    }
    return traverseAdd(node, this.root);
    function traverseAdd(node, current) {
      if(!current.left) {
        return current.left = node;
      }
      traverseAdd(node, current.left);
      if(!current.right) {
        return current.right = node;
      }
      traverseAdd(node, current.right);
    }
  }

  contains(value) {
    return this.preOrder().includes(value);
  }

  preOrder() {
    let result = [];
    let current = this.root;
    while(current.left) {
      result.push(current.value);
      current = current.left;
    }
    while(current.right) {
      result.push(current.value);
      current = current.right;
    }
    result.push(current.value);
    return result;
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
    if(!this.root) {
      return this.root = node;
    }
    return traverseAdd(node, this.root);
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
    return this.preOrder().includes(value);
  }

  preOrder() {
    let result = [];
    let current = this.root;
    while(current.left) {
      result.push(current.value);
      current = current.left;
    }
    while(current.right) {
      result.push(current.value);
      current = current.right;
    }
    result.push(current.value);
    return result;
  }

  inOrder() {

  }

  postOrder() {

  }
}

module.exports = { BinaryTree, BinarySearchTree };
