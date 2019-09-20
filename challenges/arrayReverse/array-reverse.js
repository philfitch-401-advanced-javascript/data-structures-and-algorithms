const reverseArray = array => {
  const result = [];
  for(i = 0; i < array.length; i++) {
    result[i] = array[array.length - i - 1];
  }
  return result;
};

// Stretch:

const otherReverseArray = array => {
  for(i = 0; i < array.length/2; i++) {
    const indexSwapper = array[i];
    array[i] += array[array.length - i - 1];
    array[i] -= indexSwapper;
    array[array.length - i - 1] = indexSwapper;
  }
  return array;
}
