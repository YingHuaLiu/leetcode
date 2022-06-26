const { createLinkedList, ListNode } = require('../Tools');

// 1. 自底向上归并排序
function sortList(head) {
  if(!head || !head.next) {
    return head;
  }
  // 1. 首先从头向后遍历,统计链表长度
  let length = 0;
  let cur = head;
  while (cur) {
    length++;
    cur = cur.next;
  }
  // 2. 初始化
  let root = new ListNode(-1, head);
  // 3. 每次将链表拆分成若干个长度为gap的子链表 , 并按照每两个子链表一组进行合并
  for (let gap = 1; gap < length; gap <<= 1) {
    let pre = root, cur = root.next;
    while (cur) {
      // 第一个链表的头 即 cur初始的位置
      let head1 = cur;
      for (let i = 1; i < gap && cur.next; i++) {
        cur = cur.next;
      }
      // 第二个链表的头  即 链表1尾部的下一个位置
      let head2 = cur.next;
      // 断开第一个链表和第二个链表的链接
      cur.next = null;
      // 第二个链表头 重新赋值给cur
      cur = head2;
      // 再拆分出长度为gap的链表2
      for (let i = 1; i < gap && cur && cur.next; i++) {
        cur = cur.next;
      }
      let next = null;
      if(cur) {
        next = cur.next;
        cur.next = null;
      }

      pre.next = merge(head1, head2);
      while (pre.next) {
        pre = pre.next;
      }
      cur = next;
    }
  }
  return root.next;
}

// 2. 自顶向下归并排序
var sortList = function (head) {
  if(!head || !head.next) {
    return head;
  }
  let slow = head, fast = head.next;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let temp = slow.next;
  slow.next = null;
  return merge(sortList(head), sortList(temp));
};

function merge(head1, head2) {
  if(!head1) return head2;
  if(!head2) return head1;
  let root = new ListNode(0);
  let temp = root;
  while (head1 && head2) {
    if(head1.val < head2.val) {
      temp.next = head1;
      head1 = head1.next;
    } else {
      temp.next = head2;
      head2 = head2.next;
    }
    temp = temp.next;
  }
  temp.next = head1 ? head1 : head2;
  return root.next;
}

// 3. 插入排序
function sortList(head) {
  if(!head || !head.next) return head;
  let root = new ListNode(Number.MIN_SAFE_INTEGER);
  root.next = head;
  let pre = head, cur = head.next;
  while (cur) {
    if(cur.val < pre.val) {
      let temp = root;
      while (cur.val > temp.next.val) {
        temp = temp.next;
      }
      pre.next = cur.next;
      cur.next = temp.next;
      temp.next = cur;
      cur = pre.next;
    } else {
      cur = cur.next;
      pre = pre.next;
    }
  }
  return root.next;
}

let head = sortList(createLinkedList([5, 4, 3]));
while (head) {
  console.log(head.val);
  head = head.next;
}


