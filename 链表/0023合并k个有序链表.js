var mergeKLists = function (lists) {
  return mergeSort(lists, 0, lists.length - 1);
};

function mergeSort(lists, l, r) {
  if(l === r) {
    return lists[l];
  }
  if(l > r) {
    return null;
  }
  let mid = (l + r) >> 1;
  return mergeTwoLists(mergeSort(lists, l, mid), mergeSort(lists, mid + 1, r));
}

let mergeTwoLists = function (a, b) {
  if(!a) return b;
  if(!b) return a;
  let result = new ListNode(0);
  let temp = result;
  while (a && b) {
    if(a.val < b.val) {
      temp.next = a;
      a = a.next;
    } else {
      temp.next = b;
      b = b.next;
    }
    temp = temp.next;
  }
  temp.next = a ? a : b;
  return result.next;
};

// 扩展：使用优先队列
