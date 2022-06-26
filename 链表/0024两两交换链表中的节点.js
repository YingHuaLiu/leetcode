var swapPairs = function (head) {
  if(!head || !head.next) {
    return head;
  }
  let root = new ListNode(-1,head);

  let pre = root, cur = head;
  // 保证还有双数节点没调换
  while (cur && cur.next) {
    let next = cur.next;

    cur.next = next.next;
    next.next = pre.next;
    pre.next = next;

    pre = cur;
    cur = cur.next;
  }

  return root.next;
};
