/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // Create a sentinel node
        let sentinel = new ListNode()
        sentinel.next = head
        // Get the length of List
        let length = 0
        while(head){
            head = head.next
            length++
        }
        // get the previous position
        let prevPos = length-n
        let previous = sentinel
        
        for(let i=0; i<prevPos; i++){
            previous = previous.next
        }
        previous.next = previous.next.next
        return sentinel.next
    }
}
