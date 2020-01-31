// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

// Solution #1:
function fromLast(list, n) {
  let current = list.head;
  let nAway = list.head;

  while(current){
    for (let i = 0; i < n; i++) {
      nAway = nAway.next;
    };
    if(!nAway.next){
      break;
    }
    current = current.next;
    nAway = current;
  }
  return current;
};

module.exports = fromLast;
