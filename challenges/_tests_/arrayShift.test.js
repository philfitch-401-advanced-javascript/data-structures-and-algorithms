const insertShiftArray = require('../arrayShift/array-shift');

describe('insertShiftArray', () => {

  it('inserts into the middle of an array', () => {
    const evenArray = [2, 4, 6, 8];
    const oddArray = [4, 8, 15, 23, 42];

    insertShiftArray(evenArray, 5);
    expect(evenArray).toEqual([2, 4, 5, 6, 8]);

    insertShiftArray(oddArray, 16);
    expect(oddArray).toEqual([4, 8, 15, 16, 23, 42]);
  });
});