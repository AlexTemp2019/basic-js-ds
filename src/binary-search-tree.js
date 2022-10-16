const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);

    if (this.rootNode === null) {
        this.rootNode = newNode;
    } else {
        this.addNode(this.rootNode, newNode); 
    }
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            this.addNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            this.addNode(node.right, newNode);
        }
    }
}

  has(data) {
    return !this.rootNode ? false : this.compare(this.rootNode, data);
  }

  compare(node, data) {
    if (node.data === data) return true;
    else {
      if (data < node.data) {
        if (!node.left) return false;
        else return this.compare(node.left, data);
      } else {
        if (!node.right) return false;
        else return this.compare(node.right, data);
      }
    }
  }

  find(data) {    
    return !this.rootNode ? null : this.search(this.rootNode, data);
  }

  search(node, data) {
    if (node.data == data) return node;
    else {
      if (node.data > data) {
        if (!node.left) return null;
        else {
          node = node.left;
          return this.search(node, data);
        }
      } else {
        if (!node.right) return null;
        else {
          node = node.right;
          return this.search(node, data);
        }
      }
    }
  }

  remove(data) {    
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    } else {
      if (node.data > data) {
        node.left = this.removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = this.removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;
        else if (!node.left) return node.right;
        else if (!node.right) return node.left;
      }
      let minNode = node.right;
      while (minNode.left) {
        minNode = minNode.left;
      }
      node.data = minNode.data;
      node.right = this.removeNode(node.right, minNode.data);
      return node;
    }
  }

  min() {    
    return !this.rootNode ? null : this.getMin(this.rootNode);
  }

  getMin(node) {
    return !node.left ? node.data : this.getMin(node.left);
  }

  max() { 
    return !this.rootNode ? null : this.grtMax(this.rootNode);
  }

  grtMax(node) {
    return !node.right ? node.data : this.grtMax(node.right);
  }
}


module.exports = {
  BinarySearchTree
};
