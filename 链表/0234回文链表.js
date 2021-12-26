const isPalindrome = (head) => {
  if(!head || !head.next) {
    return true;
  }
  let midNode = midOfList(head);
  let lastNode = reverseList(midNode.next);

  let cur = head;
  let temp = lastNode;
  let sign = true;
  while (temp && sign) {
    if(temp.val !== cur.val) {
      sign = false;
    }
    temp = temp.next;
    cur = cur.next;
  }

  midNode.next = reverseList(lastNode);

  return sign;
};

const reverseList = (head) => {
  let cur = head;
  let pre = null;
  while (cur) {
    let post = cur.next;
    cur.next = pre;
    pre = cur;
    cur = post;
  }
  return pre;
};

const midOfList = (head) => {
  let fast = head;
  let slow = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};
