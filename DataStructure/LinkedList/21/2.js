/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2); // list1 이 list2 보다 앞서지 않을때까지 재귀
    return list1;
  } else {
    list2.next = mergeTwoLists(list2.next, list1); // list2 가 list1 보다 앞서지 않을때까지 재귀
    return list2;
  }
};

// starts at 11:35
// submits at 11:40
// time : 5
