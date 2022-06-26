var removeNthFromEnd = function (head, n) {
  let root = new ListNode(-1,head);
  let fast = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  let pre = root;
  while (fast) {
    pre = pre.next;
    fast = fast.next;
  }
  pre.next = pre.next.next;
  return root.next;
};
