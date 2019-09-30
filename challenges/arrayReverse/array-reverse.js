/*eslint-disable-next-line*/
const reverseArray = array => {
  const result = [];
  for(let i = 0; i < array.length; i++) {
    result[i] = array[array.length - i - 1];
  }
  return result;
};

// Stretch:

/*eslint-disable-next-line*/
const otherReverseArray = array => {
  for(let i = 0; i < array.length / 2; i++) {
    const indexSwapper = array[i];
    array[i] += array[array.length - i - 1];
    array[i] -= indexSwapper;
    array[array.length - i - 1] = indexSwapper;
  }
  return array;
};
