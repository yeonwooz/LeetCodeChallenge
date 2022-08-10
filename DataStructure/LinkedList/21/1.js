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
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else list2.next = mergeTwoLists(list2.next, list1);
  return list2;
};

// starts at 12:14
// submits at 12:30
// time : 16

/*
연결리스트 : 하나의 노드가 next필드에 다음 노드 정보를 가지고 있다. 
*/
