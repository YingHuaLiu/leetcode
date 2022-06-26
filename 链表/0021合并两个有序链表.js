//https://leetcode-cn.com/problems/merge-two-sorted-lists/submissions/
var mergeTwoLists = function (list1, list2) {
  let root = new ListNode();
  let cur = root;
  while (list1 && list2) {
    if(list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }
  cur.next = list1 || list2;
  return root.next;
};
