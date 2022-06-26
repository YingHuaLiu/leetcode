var reverseList = function (head) {
  if(!head || !head.next) {
    return head;
  }
  let cur = head;
  let pre = null;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};

// 如果链表有环呢？
// 没有影响，可自己画图推导
