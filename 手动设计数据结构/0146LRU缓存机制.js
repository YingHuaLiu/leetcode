class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = {};
    this.count = 0;
    this.dummyHead = new ListNode();
    this.dummyTail = new ListNode();
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }

  get(key) {
    let node = this.map[key];
    if(!node) {
      return -1;
    }
    this.moveToHead(node);
    return node.value;
  }

  put(key, value) {
    let node = this.map[key];
    if(!node) {
      if(this.count === this.capacity) {
        let tail = this.popTail();
        delete this.map[tail.key];
        this.count--;
      }
      let newNode = new ListNode(key, value);
      this.map[key] = newNode;
      this.addToHead(newNode);
      this.count++;
    } else {
      node.value = value;
      this.moveToHead(node);
    }
  }

  popTail() {
    let tail = this.dummyTail.prev;
    this.removeFromList(tail);
    return tail;
  }

  moveToHead(node) {
    this.removeFromList(node);
    this.addToHead(node);
  }

  removeFromList(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  addToHead(node) {
    node.prev = this.dummyHead;
    node.next = this.dummyHead.next;
    this.dummyHead.next = node;
    node.next.prev = node;
  }
}
