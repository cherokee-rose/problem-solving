/* 
    github.com/cherokee-rose
    Source: LeetCode

    Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {  
    let current = head;
    
    // Handle the edge case #1
    if (n == 1) {
        if (head.next == null) {
            head = null;
        } else {
            while (current.next.next != null) {
                current = current.next;
            }
            current.next = null;
        }
    } else {
        let sz = 0;

        while (current != null) {
            current = current.next;
            sz++;
        }
        
        current = head;
        let i = sz - n;
        
        if (i > 0) {
            while (i > 1) {
                current = current.next;
                i--;
            }        
            current.next = current.next.next;
        // Handle the edge case #2
        } else {
            head = head.next;
        }
        
    }   
    
    return head;
};