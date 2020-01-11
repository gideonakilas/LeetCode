/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
     PriorityQueue<Integer> minHeap = new PriorityQueue<Integer>();   
        
    for(int i= 0; i< lists.length; i++){
        while(lists[i] != null){
            minHeap.add(lists[i].val);
            lists[i] = lists[i].next;
        }
    }
    if(minHeap.size() == 0) return null;
    int length = minHeap.size();
    ListNode head = new ListNode(minHeap.poll());
    ListNode master = head;
    for(int i=1; i< length; i++){
        head.next = new ListNode(minHeap.poll());
        head = head.next;
    }    
        
        return master;
        
    }
}