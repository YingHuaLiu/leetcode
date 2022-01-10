var deleteDuplicates = function (head) {
  if(!head || !head.next) {
    return head;
  }
  let root = new ListNode(-1);
  root.next = head;
  let cur = root;

  while (cur.next && cur.next.next) {
    if(cur.next.val === cur.next.next.val) {
      let val = cur.next.val;
      while (cur.next && val === cur.next.val) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }

  return root.next;
};
