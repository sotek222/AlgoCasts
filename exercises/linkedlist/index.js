// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
};

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertFirst(data){
    const newNode = new Node(data, this.head);
    if (!this.head) this.tail = newNode; 
    this.head = newNode;
    this.length++;
    return this;
  }

  size(){
    return this.length;
  }

  getFirst(){
    return this.head;
  }

  getLast(){
    return this.tail;
  }

  clear(){
    this.head = null;
    this.tail = null;
    this.length = 0;
    return this;
  }

  removeFirst(){
    if (!this.head) {
      return this;
    }
    this.head = this.head.next;
    this.length--;
    return this;
  }

  removeLast(){
    if (this.size() <= 1) {
      this.clear();
    } else {
      let currentNode = this.head;
      let prevNode;
  
      while(currentNode.next){
        prevNode = currentNode;
        currentNode = currentNode.next;
      };
  
      prevNode.next = null;
      this.tail = prevNode;
      this.length--;
    };

    return this;
  }

  insertLast(data){
    const newNode = new Node(data);
    if(this.head){
      this.tail = newNode;
      let node = this.head;
      while (node.next) {
        node = node.next;
      };
      node.next = this.tail;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  getAt(idx){
    if (!this.head || idx > this.size()) {
      return null;
    } else {
      let node = this.head;
      for (let i = 0; i < idx; i++) {
        node = node.next;
      };
      return node;
    };
  }

  removeAt(idx){
    if (idx > this.size() - 1 || this.size() === 0) {
      return this;
    }; 
    
    if (idx === 0) {
      this.removeFirst();
      return this;
    };
    
    const prevNode = this.getAt(idx - 1);
    const nodeToRemove = prevNode.next;

    prevNode.next = nodeToRemove.next;
    this.length--;

    return this;
  }

  insertAt(data, idx){
    if (idx <= 0) {
      this.insertFirst(data);
      return this;
    };

    if (idx > this.size() - 1){
      this.insertLast(data);
      return this;
    };

    const prevNode = this.getAt(idx - 1);
    const currentNode = prevNode.next;
    prevNode.next = new Node(data, currentNode);
    this.length++;
    return this;
  }

  forEach(fn){
    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    };
    return this;
  }
  
  mapToArray(fn) {
    let node = this.head;
    const arr = [];
    this.forEach(node => arr.push(fn(node)));
    return arr;
  }

  static fromArray(arr){
    const ll = new LinkedList();
    arr.forEach(function(element){
      ll.insertFirst(element);
    });
    return ll;
  }

  *[Symbol.iterator](){
    let node = this.head;

    while(node){
      yield node;
      node = node.next;
    }
  }
  
}

// for..of first implementation: 
// class LinkedListIterator {
//   constructor(list){
//     this.list = list;
//     this.member = 0;
//   }

//   next() {
//     const node = this.list.getAt(this.member);
//     if(!node) return { done: true };

//     const value = node;

//     this.member++;
//     return { value, done: false };
//   }
// };

// LinkedList.prototype[Symbol.iterator] = function(){
//   return new LinkedListIterator(this);
// }; 



const l = new LinkedList();
l.insertLast("a");
l.insertLast("b");
l.insertLast("c");
l.insertLast("d");


module.exports = { Node, LinkedList };


