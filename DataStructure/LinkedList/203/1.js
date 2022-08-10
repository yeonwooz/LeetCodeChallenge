/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

var removeElements = function (head, val) {
  if (head == null) {
    return head;
  }
  let current, prev;
  current = head;

  while (current) {
    if (head.val === val) {
      head = head.next;
      current = head;
    } else {
      if (current.next === null && current.val === val) {
        prev.next = current;
        return head;
      } else if (current.next === null) {
        return head;
      } else {
        prev = current;
        current = current.next;
        if (current.val === val) {
          prev.next = current.next;
          current = prev;
        }
      }
    }
  }
  return head;
};

/*
이해 안됨... ㅠ
*/
