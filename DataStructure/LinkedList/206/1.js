/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return head;
  const stack = [];

  while (head) {
    stack.push(head);
    head = head.next;
  }

  const len = stack.length;
  for (let i = len - 1; i >= 1; --i) {
    stack[i - 1].next = null;
    stack[i].next = stack[i - 1];
  }

  return stack[len - 1];
};

// starts at 11:46
// submits at 12:04
// time : 18