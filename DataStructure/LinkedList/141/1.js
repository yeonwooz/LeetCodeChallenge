/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const set = new Set();
  let cycle = false;
  while (head) {
    set.add(head);
    if (set.has(head.next)) {
      cycle = true;
      break;
    }
    head = head.next;
  }
  return cycle;
};

// starts at 1:13
// submits at 1:24
// time : 11
