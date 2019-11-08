
const mergeLists = (list1, list2) => {
  let current = list1.head;
  console.log('current', current);
  while(current || list2.next) {
    let subsequent = list2.head;
    console.log('subsequent', subsequent);
    if(subsequent.next) { 
      list2.head = subsequent.next;
    }
    if(current.next) {
      subsequent.next = current.next;
    }
    current.next = subsequent;
    current = subsequent.next;
    list1.size ++;
  }
  return list1;
};

module.exports = mergeLists;

