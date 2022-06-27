var reorderList = function (head) {
  if(!head || !head.next) {
    return head;
  }
  let middle = getMiddle(head);
  // 将右半边的节点放到栈中
  let tail = reverseList(middle.next);
  middle.next = null;

  // 合并两个链表
  let cur = head;
  while (tail) {
    let next = tail.next;
    tail.next = cur.next;
    cur.next = tail;
    cur = tail.next;
    tail = next;
  }
};

// 获取奇数节点的中间，或者偶数节点的右边
function getMiddle(head) {
  if(!head || !head.next) {
    return head;
  }
  let slow = head, fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

// 将链表反转
function reverseList(head) {
  if(!head || !head.next) {
    return head;
  }
  let pre = null, cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}
