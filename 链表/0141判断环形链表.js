var hasCycle = function (head) {
  if(!head || !head.next) {
    return false;
  }
  let slow = head, fast = head.next;
  while (fast && fast.next) {
    if(fast === slow) {
      return true;
    }
    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
};
