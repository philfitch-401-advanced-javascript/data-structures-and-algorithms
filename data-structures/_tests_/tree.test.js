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
    let binaryTree = new BinaryTree;
    binaryTree.add(5);
    binaryTree.add(7);
    binaryTree.add(3);
    expect(binaryTree.root.value).toBe(5);
    expect(binaryTree.root.left.value).toBe(7);
    expect(binaryTree.root.right.value).toBe(3);
  });

  it('determines if a value is in a BinaryTree', () => {
    let binaryTree = new BinaryTree;
    binaryTree.add(5);
    binaryTree.add(7);
    binaryTree.add(3);
    expect(binaryTree.contains(7)).toBe(true);
    expect(binaryTree.contains(4)).toBe(false);
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    let binaryTree = new BinaryTree;
    binaryTree.add(5);
    binaryTree.add(7);
    binaryTree.add(3);
    expect(binaryTree.preOrder()).toEqual([5, 7, 3]);
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
    let binarySearchTree = new BinarySearchTree;
    binarySearchTree.add(5);
    binarySearchTree.add(7);
    binarySearchTree.add(3);
    expect(binarySearchTree.root.left.value).toBe(3);
    expect(binarySearchTree.root.right.value).toBe(7);
  });

  it.skip('determines if a value is in a BinarySearchTree', () => {
    let binarySearchTree = new BinarySearchTree;
    binarySearchTree.add(5);
    binarySearchTree.add(7);
    binarySearchTree.add(3);
    expect(binarySearchTree.contains(7)).toBe(true);
    expect(binarySearchTree.contains(4)).toBe(false);
  });

  it.skip('Can successfully return a collection from a preorder traversal', () => {
    let binarySearchTree = new BinarySearchTree;
    binarySearchTree.add(5);
    binarySearchTree.add(7);
    binarySearchTree.add(3);
    expect(binarySearchTree.preOrder()).toEqual([5, 3, 7]);
  });

  it('Can successfully return a collection from an inorder traversal', () => {

  });

  it('Can successfully return a collection from a postorder traversal', () => {

  });
});
