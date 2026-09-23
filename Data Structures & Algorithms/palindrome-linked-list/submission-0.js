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
     * @return {boolean}
     */
    isPalindrome(head) {
        // find the mid
        let slow = head;
        let fast = head;
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        // reverse second half
        let prev = null
        let curr = slow
        while(curr){
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }

        // Check palindrome
        let startList = head
        let secondList = prev
        while(secondList){
            if(startList.val !== secondList.val) return false
                startList = startList.next
                secondList = secondList.next
        }
        return true
    }
}
