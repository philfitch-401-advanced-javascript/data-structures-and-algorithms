
const insertShiftArray = (arr, val) => {
  const mid = Math.ceil(arr.length / 2);
  for(let i = arr.length - 1; i >= mid; i--) [
    arr[i + 1] = arr[i]
  ];
  arr[mid] = val;
};

module.exports = insertShiftArray;