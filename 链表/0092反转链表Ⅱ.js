var reverseBetween = function (head, left, right) {
  let root = new ListNode(-1);
  root.next = head;
  let pre = root;
  // pre遍历到left节点的左边
  for (let i = 1; i < left; i++) {
    pre = pre.next;
  }
  //pre2指双指针的pre指针，cur指当前指针
  let pre2 = pre.next, cur = pre2.next;
  for (let i = left; i < right; i++) {
    pre2.next = cur.next;
    cur.next = pre.next;
    pre.next = cur;
    cur = pre2.next;
  }
  return root.next;
};
