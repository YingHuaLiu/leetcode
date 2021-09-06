var insertionSortList = function (head) {
  if(!head || !head.next) return head;
  let root = new ListNode(Number.MIN_SAFE_INTEGER);
  root.next = head;
  let pre = head, cur = head.next;
  while (cur) {
    if(cur.val < pre.val) {
      let temp = root;
      while (cur.val > temp.next.val) {
        temp = temp.next;
      }
      pre.next = cur.next;
      cur.next = temp.next;
      temp.next = cur;
      cur = pre.next;
    } else {
      cur = cur.next;
      pre = pre.next;
    }
  }
  return root.next;
};
