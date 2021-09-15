// 双指针 + 将一个链表加到另一个链表后面
function getIntersectionNode(head1, head2) {
  if(!head1 || !head2) {
    return null;
  }
  let cur1 = head1, cur2 = head2;
  while (cur1 !== cur2) {
    cur1 = cur1 ? cur1.next : head2;
    cur2 = cur2 ? cur2.next : head1;
  }
  return cur1;
}
