const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.length = 0;
//   }

//   addElement(value) {
//     if (this.length === 0) {
//       this.head = new Node(value);
//     } else {
//       let current = this.head;
//       // console.log('current ', current)

//       while (current.next) {
//         current = current.next;
//         // console.log('current next ', current)
//       }

//       current.next = new Node(value);
//       // console.log('cn', current.next);
//     }

//     this.length++;
//   }
// }

function removeKFromList(/* l, k */) {
  // function findAndRemoveElement(l, k) {
  //   let current = l.head;
  //   let prev = null;
  //   let indexK = 0;

  //   while(current) {
  //     if (current.value === k) {
  //       if (prev === null) {
  //         l.head = current.next;
  //       } else {
  //         prev.next = current.next;
  //       }
  //       l.length--;
  //       return indexK;
  //     }
  //     prev = current;
  //     current = current.next;
  //     indexK++;
  //   }
  //   // l.length--;
  //   return -1;
  // }

  // let index;
  // while ((index = findAndRemoveElement(l, k)) !== -1) {
  //   findAndRemoveElement(l, k);
  // }
  // return l;

  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

















// const list = new LinkedList;
// list.addElement(3);
// list.addElement(1);
// list.addElement(2);
// list.addElement(3);
// list.addElement(4);
// list.addElement(5);

// const found = 3

// console.log(list);
// removeKFromList(list, found);
// console.log(list);

module.exports = {
  removeKFromList
};

// node src/remove-from-list.js
