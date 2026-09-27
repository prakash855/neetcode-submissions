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
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(headA, headB) {
        let store = new Set()
        while(headB){
            store.add(headB)
            headB = headB.next
        }

        while(headA){
            if(store.has(headA)) return headA
            headA = headA.next
        }
        return null
    }
}
