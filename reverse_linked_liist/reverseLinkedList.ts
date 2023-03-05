/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  //if the head is null, return null
  if (!head) return null

  //if the head is the only node, return the head
  if (!head.next) return head

  //if the head has a next node, we need to reverse the list
  let prev = null
  let curr = head
  let next = head.next

  while (curr) {
    curr.next = prev
    prev = curr
    curr = next
    next = next ? next.next : null
  }

  return prev
}
