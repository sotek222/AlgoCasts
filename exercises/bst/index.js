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
  constructor(data){
    this.data = data;
    this.right = null;
    this.left = null;
  }

  insert(data){
    if(data < this.data && this.left){
      this.left.insert(data);
    } else if (data < this.data){
      this.left = new Node(data);
    };

    if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    };

  }

  contains(data){
    let node = this;

    if(node.data === data){
      return node;
    } else {
      if (node.left || node.right) {
        if(data > node.data){
          node = node.right;
          return node.contains(data);
        } else {
          node = node.left;
          return node.contains(data); 
        }
      } else {
        return null;
      }
    }  
  }

}

module.exports = Node;
// First implementation:
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.right = null;
//     this.left = null;
//   }

//   insert(data) {
//     let node = this;
//     let prevNode = this;

//     while (node) {
//       if (data > node.data) {
//         prevNode = node;
//         node = node.right;
//       } else {
//         prevNode = node;
//         node = node.left;
//       };
//     };
//     const newNode = new Node(data);
//     newNode.data > prevNode.data ?
//       prevNode.right = newNode :
//       prevNode.left = newNode;
//   }

//   contains(data) {
//     let node = this;

//     if (node.data === data) {
//       return node;
//     } else {
//       if (node.left || node.right) {
//         if (data > node.data) {
//           node = node.right;
//           return node.contains(data);
//         } else {
//           node = node.left;
//           return node.contains(data);
//         }
//       } else {
//         return null;
//       };
//     };
//   }

// };