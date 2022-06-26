// 迭代
var deleteDuplicates = function (head) {
  if(!head || !head.next) {
    return head;
  }
  let root = new ListNode(-1,head);
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
// 递归
var deleteDuplicates = function (head) {
  if(!head || !head.next) {
    return head;
  }
  if(head.val !== head.next.val) {
    head.next = deleteDuplicates(head.next);
    return head;
  }
  let next = head.next;
  while (next && next.val === head.val) {
    next = next.next;
  }
  return deleteDuplicates(next);
};
