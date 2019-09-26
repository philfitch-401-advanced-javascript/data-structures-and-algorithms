
const LinkedList = require('../linked-list/linkedList');

describe('LinkedList', () => {

  // Can successfully instantiate an empty linked list
  it('instantiates empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList).toEqual({ head: null, size: 0 });
  });
  // Can properly insert into the linked list
  it('inserts', () => {
    let linkedList = new LinkedList();
    linkedList.insert('red');
    expect(this.size).toBe(1);
    // The head property will properly point to the first node in the linked list
    expect(this.head).toEqual('red');
    // Can properly insert multiple nodes into the linked list
    linkedList.insert('orange');
    expect(this.size).toBe(2);
  });
  // Will return true when finding a value within the linked list that exists
  it('finds', () => {
    let linkedList = new LinkedList();
    linkedList.insert('red');
    linkedList.insert('orange');
    expect(linkedList.includes('red')).toBe(true);
    // Will return false when searching for a value in the linked list that does not exist
    expect(linkedList.includes('yellow')).toBe(false);
  });
  // Can properly return a collection of all the values that exist in the linked list
  it('strings values', () => {
    let linkedList = new LinkedList();
    linkedList.insert('red');
    linkedList.insert('orange');
    expect(linkedList.toString()).toEqual(`red, orange, `);
  });
});
