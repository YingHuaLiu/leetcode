// https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/tu-jie-kuai-man-zhi-zhen-ji-qiao-yuan-li-5tz0/
// 要求推导原理
// https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/141ti-de-kuo-zhan-ru-guo-lian-biao-you-huan-ru-he-/
var detectCycle = function (head) {
  if(!head || !head.next) {
    return null;
  }
  let slow = head, fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if(slow === fast) {
      break;
    }
  }
  // 如果是因为fast到最后而终止，说明无环
  if(slow !== fast) {
    return null;
  }
  fast = head;
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return fast;
};
