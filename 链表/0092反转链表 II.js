var reverseBetween = function (head, left, right) {
  let root = new ListNode(-1);
  root.next = head;
  let pre = root;
  // pre遍历到left节点的左边
  for (let i = 1; i < left; i++) {
    pre = pre.next;
  }
  // 其实就是每次循环将next插入到pre前面
  let cur = pre.next, next = cur.next;
  for (let i = left; i < right; i++) {
    cur.next = next.next;
    next.next = pre.next;
    pre.next = next;
    next = cur.next;
  }
  return root.next;
};
