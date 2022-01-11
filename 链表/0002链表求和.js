// 反向：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295 => 2 -> 1 -> 9
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(-1);
  let cur = dummy;
  let carry = 0;
  while (l1 || l2 || carry) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    cur.next = new ListNode((val1 + val2 + carry) % 10);
    carry = Math.floor((val1 + val2 + carry) / 10);
    cur = cur.next;

    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
  }
  return dummy.next;
};

// 正向：(6 -> 1 -> 7) + (2 -> 9 -> 5)，即617 + 295 => 9 -> 1 -> 2
var addTwoNumbers = function (l1, l2) {
  let stack1 = [], stack2 = [];
  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  let dummy = new ListNode(-1);
  let cur = dummy;
  let carry = 0;
  while (stack1.length || stack2.length || dummy) {
    let val1 = stack1.length ? stack1.pop() : 0;
    let val2 = stack2.length ? stack2.pop() : 0;
    cur.next = new ListNode((val1 + val2 + carry) % 10);
    carry = Math.floor((val1 + val2 + carry) / 10);
    cur = cur.next;
  }

  return dummy.next;
};
