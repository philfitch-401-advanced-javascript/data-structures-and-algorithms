
const arrayBinarySearch = (arr, key) => {

  let start = 0;
  let end = arr.length - 1;
  
  while(start <= end) {
    let mid = Math.floor((start + end) / 2);
    if(arr[mid] === key) {
      return mid;
    } else if(arr[mid] > key) {
      end = mid - 1;
    } else if(arr[mid] < key) {
      start = mid + 1;
    }
    return -1;
  }
};

module.exports = arrayBinarySearch;