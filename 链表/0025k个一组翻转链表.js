function reverseKGroup(head, k) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let pre = dummy, end = dummy;

  while (end.next) {
    // 将end移动到k个元素的组尾
    for (let i = 0; i < k && end; i++) {
      end = end.next;
    }
    // 如果不足k个元素，那么结束
    if(!end) {
      break;
    }
    let start = pre.next, next = end.next;
    end.next = null;
    pre.next = reverse(start);
    start.next = next;

    pre = start;
    end = start;
  }
  return dummy.next;
}

function reverse(start) {
  let dummy = new ListNode(-1);
  let cur = start;
  while (cur) {
    let next = cur.next;
    cur.next = dummy.next;
    dummy.next = cur;
    cur = next;
  }
  return dummy.next;
}
