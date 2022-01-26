var copyRandomList = function (head) {
  let map = new Map();

  function help(node) {
    if(!node) {
      return null;
    }
    if(!map.has(node)) {
      let newNode = new Node(node.val);
      map.set(node, newNode);
      // 一直往右深入，将每个节点保存进map
      newNode.next = help(node.next);
      // 此时所有原始节点都有了拷贝节点，可以没有顾虑地使用random
      newNode.random = help(node.random);
    }

    return map.get(node);
  }

  return help(head);
};
