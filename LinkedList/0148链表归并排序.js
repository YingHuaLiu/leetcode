const { createLinkedList, ListNode } = require('../Tools');

var sortList = function (head) {
  return mergeSort(head);
};

function mergeSort(head) {
  if(!head || !head.next) {
    return head;
  }
  let slow = head, fast = head.next;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let temp = slow.next;
  slow.next = null;
  return merge(mergeSort(head), mergeSort(temp));
}

function merge(head1, head2) {
  if(!head1) return head2;
  if(!head2) return head1;
  let root = new ListNode(0);
  let temp = root;
  while (head1 && head2) {
    if(head1.val < head2.val) {
      temp.next = head1;
      head1 = head1.next;
    } else {
      temp.next = head2;
      head2 = head2.next;
    }
    temp = temp.next;
  }
  if(head1) temp.next = head1;
  if(head2) temp.next = head2;
  return root.next;
}

let head = sortList(createLinkedList([5, 4, 3]));
while (head) {
  console.log(head.val);
  head = head.next;
}
