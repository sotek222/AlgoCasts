// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data, right = null, left = null){
    this.data = data;
    this.right = right;
    this.left = left;
  }

  insert(data){
    let node = this;
    let prevNode = this;

    while(node) {
      if(data > node.data){
        prevNode = node;
        node = node.right;
      } else {
        prevNode = node;
        node = node.left;
      };
    };
    const newNode = new Node(data);
    newNode.data > prevNode.data ? 
    prevNode.right = newNode : 
    prevNode.left = newNode;
  }


}

module.exports = Node;
