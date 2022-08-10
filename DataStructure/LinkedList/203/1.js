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
  current = head; // head(원본) 남기기 위해 current변수에 담기

  while (current) {
    if (head.val === val) {
      head = head.next;
      current = head; // head대신 current를 이동
    } else {
      if (current.next === null) {
        return head; // current탐색 끝났으면 head리턴
      } else {
        prev = current; // prev 에 current 노드를 담고,
        current = current.next; // current에 다음 노드를 담는다.

        if (current.val === val) {
          // 만약 다음 노드의 데이터가 삭제해야 하는 데이터라면
          prev.next = current.next; // prev에 그 다음노드를 연결하고,
          current = prev; // current에 prev노드를 담는다.
        }
      }
    }
  }
  return head;
};

/*
이해 안됨... ㅠ
*/
