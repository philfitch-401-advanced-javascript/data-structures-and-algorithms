
const LinkedList = require('../linked-list/linkedList');

describe('LinkedList', () => {

  it('instantiates empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList).toEqual({ head: null, size: 0 });
  });
  
  it('inserts a new node', () => {
    let linkedList = new LinkedList();
    linkedList.insert('red');
    expect(linkedList.size).toBe(1);
    expect(linkedList.head).toEqual({ 'value': 'red', 'next': null });
    linkedList.insert('orange');
    expect(linkedList.size).toBe(2);
  });
  
  it('finds if value is included', () => {
    let linkedList = new LinkedList();
    linkedList.insert('red');
    linkedList.insert('orange');
    expect(linkedList.includes('red')).toBe(true);
    expect(linkedList.includes('yellow')).toBe(false);
  });
  
  it('collects stringified values', () => {
    let linkedList = new LinkedList();
    linkedList.insert('red');
    linkedList.insert('orange');
    expect(linkedList.toString()).toEqual('orange, red');
  });

  it('add a node to the end of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(1);
    linkedList.append(5);
    expect(linkedList.head.next.next.next.value).toEqual(5);
  });

  it('add multiple nodes to the end of a linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(1);
    linkedList.append(5);
    expect(linkedList.head.next.next.next.value).toEqual(5);
    linkedList.append(7);
    expect(linkedList.head.next.next.next.next.value).toEqual(7);
  });

  it('insert a node before a node located i the middle of a linked list', () => {

  });
  it('insert a node before the first node of a linked list', () => {

  });

  it('insert after a node in the middle of the linked list', () => {

  });

  it('insert a node after the last node of the linked list', () => {

  });
});
