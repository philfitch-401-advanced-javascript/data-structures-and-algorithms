const LinkedList = require('../../data-structures/linked-list/linkedList');
const mergeLists = require('../llMerge/ll-merge');

describe('mergeLists', () => {
  it('merges two lists into one', () => {

    let list1 = new LinkedList();
    list1.insert(5);
    list1.insert(3);
    list1.insert(1);

    let list2 = new LinkedList();
    list2.insert(6);
    list2.insert(4);
    list2.insert(2);

    let zippedList = new LinkedList();
    zippedList.insert(6);
    zippedList.insert(5);
    zippedList.insert(4);
    zippedList.insert(3);
    zippedList.insert(2);
    zippedList.insert(1);

    expect(mergeLists(list1, list2)).toEqual(zippedList);
  });
});