const arrayBinarySearch = require('../arrayBinarySearch/array-binary-search');

describe('arrayBinaryShift', () => {
  
  it('finds the key index within a sorted array', () => {
    const array = [4, 8, 15, 16, 23, 42];
    const key = 15;
    
    expect(arrayBinarySearch(array, key)).toEqual(2);
  });

  it('returns -1 if array doesn\'t include key', () => {
    const array = [11, 22, 33, 44, 55, 66, 77];
    const key = 90;

    expect(arrayBinarySearch(array, key)).toEqual(-1);
  });
});