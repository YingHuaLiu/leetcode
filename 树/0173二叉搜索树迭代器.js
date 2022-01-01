/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    this.stack = [];
    this.head = root;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    if (this.hasNext()) {
        while (this.head) {
            this.stack.push(this.head)
            this.head = this.head.left;
        }
        let node = this.stack.pop();
        this.head = node.right;
        return node.val;
    }
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return !!(this.stack.length || this.head);
};
