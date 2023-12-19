const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    if (this.length === 0) {
      this.head = new Node(value);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
    this.length ++;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }

    const current = this.head.value;
    this.head = this.head.next;
    this.length--;

    return current;
  }
}

// const queue = new Queue;
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.dequeue();

// queue.getUnderlyingList();

// console.log(queue);

module.exports = {
  Queue
};

// node src/queue.js
