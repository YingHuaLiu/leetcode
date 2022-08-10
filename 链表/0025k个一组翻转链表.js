function reverseKGroup(head, k) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let pre = dummy, cur = dummy;

  while (cur.next) {
    // 将end移动到k个元素的组尾
    for (let i = 0; i < k && cur; i++) {
      cur = cur.next;
    }
    // 如果不足k个元素，那么结束
    if (!cur) {
      break;
    }
    let start = pre.next, next = cur.next;
    cur.next = null;
    pre.next = reverse(start);
    start.next = next;

    pre = start;
    cur = start;
  }
  return dummy.next;
}

function reverse(head) {
  let pre = null, cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}
