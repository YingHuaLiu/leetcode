const isPalindrome = (head) => {
  if(!head || !head.next) {
    return true;
  }
  let midNode = midOfList(head);
  let lastNode = reverseList(midNode.next);

  let cur = head;
  let temp = lastNode;
  let res = true;
  while (temp && res) {
    if(temp.val !== cur.val) {
      res = false;
    }
    temp = temp.next;
    cur = cur.next;
  }

  midNode.next = reverseList(lastNode);

  return res;
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
