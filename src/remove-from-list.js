const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
function removeKFromList(l, k) {
  let prev = null;
  let curr = l;

  while (curr) {
    if (curr && curr.value === k) {
      if (curr === l) {
        // передвинуть первый
        l = l.next;
        curr = l;
      } else {
        // исключить промежуточный
        prev.next = curr.next;
        curr = curr.next;
      }
    } else {
      // шаг дальше 
      prev = curr;
      curr = curr.next;
    }
  }

  return l;
}

module.exports = {
  removeKFromList
};
