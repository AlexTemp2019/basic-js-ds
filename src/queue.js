const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {  
  list; 

  getUnderlyingList() {
    return !this.list ? null : this.list;
  }
  
  enqueue(value) {
    let node = new ListNode(value);
    if (!this.list) {
      this.list = node;
      return;
    }
    let lastNode = this.list;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    lastNode.next = node;
  }

  dequeue() {
    if (!this.list) return null;

    let node = this.list;
    this.list = !this.list.next ? null : this.list.next;
    return node.value;
  }
}

module.exports = {
  Queue
};
