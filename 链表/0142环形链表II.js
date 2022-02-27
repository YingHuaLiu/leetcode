var detectCycle = function (head) {
  if(!head || !head.next) {
    return null;
  }
  let slow = head, fast = head;
  do {
    slow = slow.next;
    fast = fast.next.next;
  } while (slow !== fast && fast && fast.next);
  // 如果是因为fast到最后而终止，说明无环
  if(fast !== slow) {
    return null;
  }
  fast = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};
