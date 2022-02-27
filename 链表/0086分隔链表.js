var partition = function (head, x) {
  if(!head || !head.next) {
    return head;
  }
  let dummy = new ListNode(-1, head);
  let pre = dummy;
  while (pre.next && pre.next.val < x) {
    pre = pre.next;
  }
  // 此时pre在第一个>=x的节点前面一个单位
  let cur = pre.next;
  let pre2 = pre;
  while (cur) {
    if(cur.val >= x) {
      pre2 = cur;
      cur = cur.next;
    } else {
      // 将当前<x的节点插入到pre前面
      pre2.next = cur.next;
      cur.next = pre.next;
      pre.next = cur;
      pre = cur;
      cur = pre2.next;
    }
  }
  return dummy.next;
};
