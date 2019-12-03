const { BinaryTree, BinarySearchTree } = require('../tree/tree');

describe('BinaryTree', () => {
  it('Can successfully instantiate an empty tree', () => {
    let binaryTree = new BinaryTree;
    expect(binaryTree.root).toBe(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let binaryTree = new BinaryTree;
    binaryTree.add(5);
    expect(binaryTree.root.value).toBe(5);
  });

  it('Can successfully add a left child and right child to a single root node', () => {

  });

  it('Can successfully return a collection from a preorder traversal', () => {

  });

  it('Can successfully return a collection from an inorder traversal', () => {

  });

  it('Can successfully return a collection from a postorder traversal', () => {

  });
});

describe('BinarySearchTree', () => {
  it('Can successfully instantiate an empty tree', () => {
    let binarySearchTree = new BinarySearchTree;
    expect(binarySearchTree.root).toBe(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let binarySearchTree = new BinarySearchTree;
    binarySearchTree.add(5);
    expect(binarySearchTree.root.value).toEqual(5);
  });

  it('Can successfully add a left child and right child to a single root node', () => {

  });

  it('Can successfully return a collection from a preorder traversal', () => {

  });

  it('Can successfully return a collection from an inorder traversal', () => {

  });

  it('Can successfully return a collection from a postorder traversal', () => {

  });
});
