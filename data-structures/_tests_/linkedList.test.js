
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
});
