// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data){
    this.data = data;
    this.children = [];
  }

  add(data){
    this.children.push(new Node(data));
    return this;
  }

  remove(data){
    this.children = this.children.filter(child => child.data !== data)
  }
}

class Tree {
  constructor(){
    this.root = null;
  }

  traverseBF(fn){
    const nodes = [this.root];
    while(nodes.length > 0){
      const currentNode = nodes.shift();
      fn(currentNode);
      nodes.push(...currentNode.children);
    }
  }
  
  traverseDF(fn){
    this.utility(this.root, fn)
  }

  utility(node, fn){
    fn(node);
    if(node.children.length){
      node.children.forEach(child => {
        this.utility(child, fn);
      });
    };
  }
  
}
const t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('c');
t.root.children[0].add('d');
module.exports = { Tree, Node };

// Solution #1: 
// traverseBF(fn){
//   const tasks = [this.root];
//   let position = 0;
//   let node = tasks[position];

//   while(node){
//     tasks.push(...node.children);
//     position++;
//     node = tasks[position];
//   }

//   tasks.forEach(node => fn(node));
// }