
const mergeLists = (list1, list2) => {

  let current = list1.head;
  
  while(current && list2.size) {
    let subsequent = list2.head;
    list2.head = subsequent.next;
    if(current.next) {
      subsequent.next = current.next;
    } else if(!current.next) {
      current.next = subsequent;
      list1.size += list2.size;
      return list1;
    }
    current.next = subsequent;
    current = subsequent.next;
    list1.size ++;
    list2.size --;
  }

  return list1;
};

module.exports = mergeLists;

