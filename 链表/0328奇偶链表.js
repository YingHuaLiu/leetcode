var oddEvenList = function (head) {
  if(!head || !head.next) {
    return head;
  }
  let evenHead = head.next;
  let oddTail = head, evenTail = head.next;
  while (evenTail && evenTail.next) {
    oddTail.next = evenTail.next;
    evenTail.next = evenTail.next.next;

    oddTail = oddTail.next;
    evenTail = evenTail.next;
  }
  // 奇数链表的尾节点指向偶数链表的头节点
  oddTail.next = evenHead;
  return head;
};
