
const LinkedList = require('../linked-list/linkedList');

describe('LinkedList', () => {

  it('instantiates empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList).toEqual({ head: null, size: 0 });
  });
});

describe('insert', () => {
  it('inserts a new node', () => {
    let linkedList = new LinkedList();
    linkedList.insert('red');
    expect(linkedList.size).toBe(1);
    expect(linkedList.head).toEqual({ 'value': 'red', 'next': null });
    linkedList.insert('orange');
    expect(linkedList.size).toBe(2);
  });

  it('insert a node before the first node of a linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(1);
    linkedList.insert(5);
    expect(linkedList.head.value).toEqual(5);
  });
});

describe('includes', () => {
  it('finds if value is included', () => {
    let linkedList = new LinkedList();
    linkedList.insert('red');
    linkedList.insert('orange');
    expect(linkedList.includes('red')).toBe(true);
    expect(linkedList.includes('yellow')).toBe(false);
  });
});

describe('toString', () => {
  it('collects stringified values', () => {
    let linkedList = new LinkedList();
    linkedList.insert('red');
    linkedList.insert('orange');
    expect(linkedList.toString()).toEqual('orange, red');
  });
});

describe('append', () => {
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
});

describe('insertBefore', () => {
  it('insert a node before a node located in the middle of a linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(1);
    linkedList.insertBefore(3, 5);
    expect(linkedList.head.next.value).toEqual(5);
  });
});

describe('insertAfter', () => {
  it('insert after a node in the middle of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(1);
    linkedList.insertAfter(3, 5);
    expect(linkedList.head.next.next.value).toEqual(5);
  });

  it('insert a node after the last node of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(1);
    linkedList.insertAfter(2, 5);
    expect(linkedList.head.next.next.next.value).toEqual(5);
  });
});

describe('kthFromEnd', () => {
  it('returns value of node kth from the end', () => {
    let linkedList = new LinkedList();
    linkedList.insert(2);
    expect(linkedList.kthFromEnd(0)).toEqual(2);
    linkedList.insert(8);
    linkedList.insert(3);
    linkedList.insert(1);
    expect(linkedList.kthFromEnd(2)).toEqual(3);
    expect(linkedList.kthFromEnd(4)).toEqual('Exception');
    expect(linkedList.kthFromEnd(6)).toEqual('Exception');
    expect(linkedList.kthFromEnd(-5)).toEqual('Exception');
  });
});
