/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head;
    let node = null;
    let carry = 0;
    while (l1 || l2) {
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;
        let sum = 0;
        sum = l1Val + l2Val + carry;

        if (sum > 9) {
            carry = 1;
            sum = sum - 10;
        } else carry = 0;

        if (!node) {
            node = new ListNode(sum);
            head = node;
        } else {
            node.next = new ListNode(sum);
            node = node.next;
        }


        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (carry == 1) node.next = new ListNode(1);
    return head;
};