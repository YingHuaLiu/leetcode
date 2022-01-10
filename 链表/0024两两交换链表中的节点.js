var swapPairs = function (head) {
  if(!head || !head.next) {
    return head;
  }
  let dummy = new ListNode(-1);
  dummy.next = head;

  let pre = dummy, cur = head, next = head.next;
  while (next) {
    cur.next = next.next;
    next.next = pre.next;
    pre.next = next;

    pre = cur;
    cur = cur.next;
    next = cur?.next;
  }

  return dummy.next;
};
