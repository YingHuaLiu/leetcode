var detectCycle = function (head) {
  if(!head || !head.next) {
    return null;
  }
  let fast = head, slow = head;
  while (true) {
    if(!fast.next || !fast.next.next) {
      return null;
    }
    fast = fast.next.next;
    slow = slow.next;
    if(fast === slow) {
      break;
    }
  }
  fast = head;
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return fast;
};
