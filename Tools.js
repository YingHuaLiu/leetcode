class PriorityQueue {
  constructor(arr) {
    if(arr.length) {
      this.tree = arr;
      return;
    }
    this.tree = [];
  }

  // 入队
  enqueue(val) {
    this.tree.push(val);
  }

  // 出队
  dequeue() {
    let maxIndex = 0;
    for (let i = 1; i < this.tree.length; i++) {
      if(this.tree[i] > this.tree[maxIndex]) {
        maxIndex = i;
      }
    }
    this.tree.splice(maxIndex, 1);
  }

  // 取队首
  getFirst() {
    return this.tree[0];
  }
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
};

function createLinkedList(nums) {
  let root = new ListNode(0);
  let temp = root;
  nums.forEach(item => {
    temp.next = new ListNode(item);
    temp = temp.next;
  });
  temp.next = null;
  return root.next;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = this.parent = null;
}

module.exports = { PriorityQueue, ListNode, createLinkedList, TreeNode };
